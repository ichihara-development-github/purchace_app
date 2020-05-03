require 'rails_helper'

RSpec.describe Product, type: :model do
   before do
        @store = Store.new(name: "SampleStore", top_image: "sample.jpg")
        @store.save
        product_sample = @store.products.build(name: "SampleProduct", description:"This is sample product", price: 1,main_image: "sample.jpg")
        product_sample.save

    end

  it "name isn't less than 1 charactor" do
      product = @store.products.build(name: "", price:1, description:"This is sample product", main_image: "sample.jpg")
      expect(product).not_to be_valid
  end


  it "is price exist?" do
      product = @store.products.build(name: "sampleproduct", description:"This is sample product", main_image: "sample.jpg")
      expect(product).not_to be_valid
  end

  it "is description exist?" do
      product = @store.products.build(name: "sampleproduct", price:1, main_image: "sample.jpg")
      expect(product).not_to be_valid
  end


  it "is product belongs to store?" do
     product = Product.new(name: "sampleproduct", price:1, description:"This is sample product", main_image: "sample.jpg")
     expect(product).not_to be_valid
  end

  it "isn't save same name" do
     product = @store.products.build(name: "SampleProduct", price:1, description:"This is sample product", main_image: "sample.jpg")
     expect(product).not_to be_valid
  end

  it "isn't save so cheep price" do
     product = @store.products.build(name: "sampleproduct", price:0, description:"This is sample product", main_image: "sample.jpg")
     expect(product).not_to be_valid

  end

   it "isn't save so expensive price" do
     product = @store.products.build(name: "sampleproduct", price:1000000, description:"This is sample product", main_image: "sample.jpg")
     expect(product).not_to be_valid

  end
end
