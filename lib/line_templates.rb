module LineTemplates

  def menu_template
      {
    "type": "template",
    "altText": "this is a carousel template",
    "template": {
        "type": "carousel",
        "columns": [
            {
              "thumbnailImageUrl": "https://purchase-app-backet.s3.amazonaws.com/uploads/store.jpg",
              "imageBackgroundColor": "#000000",
              "title": "メニュー",
              "text": "description",
              "actions": [
                  {
                      "type": "postback",
                      "label": "商品を検索",
                      "data": "action=buy&itemid=222"
                  },
                  {
                      "type": "postback",
                      "label": "Add to cart",
                      "data": "action=add&itemid=222"
                  },
                  {
                      "type": "uri",
                      "label": "サイトへ >>",
                      "uri": "https://ichihara-purchase-app.com/session/new"
                  },
              ]
            },
            "#{ower_menu_template}"

        ],
        "imageAspectRatio": "rectangle",
        "imageSize": "cover"
    }
    }
  end

  def ower_menu_template
    if @line_user?

      {
        "thumbnailImageUrl": "https://purchase-app-backet.s3.amazonaws.com/uploads/store.jpg",
        "imageBackgroundColor": "#FFFFFF",
        "title": "管理者メニュー",
        "text": "description",
        "defaultAction": {
            "type": "uri",
            "label": "サイトへ >>",
            "uri": "https://ichihara-purchase-app.com/session/new"
        },
        "actions": [
            {
                "type": "postback",
                "label": "売上確認",
                "data": "action=buy&itemid=111"
            },
            {
                "type": "postback",
                "label": "テスト",
                "data": "action=user_id=22"
            },
            {
                "type": "uri",
                "label": "サイトへ >>",
                 "uri": "https://ichihara-purchase-app.com/session/new"
            },
        ]
      }
    else
    end
  end

  def serach_result_template
    {
    "type": "template",
    "altText": "this is a carousel template",
    "template": {
        "type": "carousel",
        "columns": [
            {
              "thumbnailImageUrl": "https://purchase-app-backet.s3.amazonaws.com/uploads/store.jpg",
              "imageBackgroundColor": "#000000",
              "title": "メニュー",
              "text": "description",
              "actions": [
                  {
                      "type": "uri",
                      "label": "サイトへ >>",
                      "uri": "https://ichihara-purchase-app.com/products/5"
                  },
              ]
            },
        ],
        "imageAspectRatio": "rectangle",
        "imageSize": "cover"
    }
  }
  end

end