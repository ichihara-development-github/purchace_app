require 'will_paginate/array'

class ProductsController < ApplicationController
    prepend_before_action -> {check_captcha("products")}, only: :create

    before_action :has_store?, only: [:new, :edit_products]
    before_action :login_user?, only: [:show]
    before_action :set_product, only: [:show, :edit, :update, :destroy]
    before_action -> { has_authority?(@product.store.user) }, only: [:edit, :update, :destroy]

  def set_product
    @product = Product.find(params[:id])
  end

  def new
   @product = Product.new
  end

  def create
     @store = current_user.store
     @product = @store.products.build(product_params)
    if @product.save
      users = current_user.followers
      users.map{|user| create_notification(user, @product, "", "create") }
      p Product.input_request(@product.name)
      flash[:success] = "商品の作成が完了しました"
      redirect_to @product
    else
      flash[:error_messages] = @product.errors.full_messages
      render "new"
    end
  end


  def index
    $products = Product.all
    @products = $products.paginate(page: params[:page], per_page: 8)
    @popular = Product.popular
  end

  def show
    @comment = Comment.new
    @basket = Basket.new
    @comments = @product.comments.order(created_at: "DESC")
    @distance = distance(current_user.latitude, current_user.longitude, @product.store.latitude, @product.store.longitude)
  end

  def edit_products
      @products = current_user.store.products
  end

  def edit
  end

  def update
    old_name = @product.name
    if @product.update(product_params)
      name = @product.name
      flash[:success] = "商品を編集しました"
      redirect_to product_path(@product)
      Product.update_request(old_name, name)
    else
      flash[:error_messages] = @product.errors.full_messages
      render "edit"
    end
  end

  def destroy
    name = @product.name
    if @product.destroy
      flash[:success] = "削除しました"
      redirect_to edit_products_path
      p Product.delete_request(name)
    else
      flash[:error_messages] = @product.errors.full_messages
      render "edit_product"
    end
  end

  #----------------------line up------------------------------

  def line_up
    @message = ""
    case params[:line_up]
    when  "価格が安い" then
       @products = $products.order(price: "ASC")
    when  "価格が高い" then
       @products = $products.order(price: "DESC")
    when  "新着順" then
       @products = $products.order(created_at: "DESC")
    when  "購入数" then
       @products = line_up_popular
    when  "レビュー件数" then
       @products = line_up_evaluation_count
    when  "レビュー平均" then
       @products = line_up_evaluation_average
    end

    respond_to do |format|
      format.html
      format.js
    end
  end

 #-------------------------search-------------------------------

  def search
    if search_params.values.all?("")
      redirect_to products_path
    else
      $products = Product.search(search_params)
      @products = $products.paginate(page: params[:page], per_page: 8)
      if $products.blank?
        flash[:warning] = "マッチする商品が見つかりませんでした"
        redirect_to products_path
      else
        @popular = Product.popular
        flash.now[:success] = "#{$products.count}件の商品が見つかりました"
        render "index"
      end
    end
  end

    def free_search
        $products = Product.free_search(params[:free_word])
        @products = $products.paginate(page: params[:page], per_page: 8)
        if @products.blank?
          flash[:warning] = "マッチする商品が見つかりませんでした"
          redirect_to products_path
        else
          @popular = Product.popular
          render "index"
        end
    end

    #------------------------compare---------------------

    def compare
      @product = Product.find_by(name: params[:name])
      @prices = Product.send_get_request(params[:name])["body"]
      p @price
      respond_to do |format|
        format.html
        format.js
      end
    end


  private
  def product_params
    params.require(:product).permit(:name,:description, :price, :category,:count, :main_image, :sub_image1, :sub_image2 )
  end

  def search_params
    params.permit(:min, :max, :store_id, :category)
  end

  def line_up_popular
    begin Product.popular($products)
    rescue
      @message = "購入された商品がありません"
      $products
    end
  end

  def line_up_evaluation_count
    begin  Product.has_many_reviews($products)
    rescue
      @message = "評価された商品がありません"
      $products
    end
  end

  def line_up_evaluation_average
    begin Product.products_review_avarage($products)
    rescue
       @message = "評価された商品がありません"
       $products
    end
  end


end
