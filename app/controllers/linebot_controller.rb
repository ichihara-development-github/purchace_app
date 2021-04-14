class LinebotController < ApplicationController

  def menu_template
    {
  "type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
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
          },
          {
            "thumbnailImageUrl": "https://purchase-app-backet.s3.amazonaws.com/uploads/store.jpg",
            "imageBackgroundColor": "#000000",
            "title": "this is menu",
            "text": "description",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
            },
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=222"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=222"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/222"
                }
            ]
          }
      ],
      "imageAspectRatio": "rectangle",
      "imageSize": "cover"
  }
}
  end

  def callback
    body = request.body.read
    events = client.parse_events_from(body)

    events.each do |event|
      case event
      when Line::Bot::Event::Message::Postback
        client.reply_message(event['replyToken'], sticker_list("thanks"))
        client.reply_message(event['replyToken'], "#{data}")
      when Line::Bot::Event::Message
        case event.type
        when Line::Bot::Event::MessageType::Text
            message = menu_template
            client.reply_message(event['replyToken'], message)
        when Line::Bot::Event::MessageType::Image
            client.reply_message(event['replyToken'], sticker_list("thanks"))
            # user_id = event["source"]["userId"]
            # client.reply_message(event['replyToken'], sticker_list("thanks"))
        end
          # push(user_id)
          # @profile = get_line_UserProfile(user_id)
          # if check_line_user(user_id)
          #   send_menue
          # else
          #   message = send_greeting
          #   client.reply_message(event['replyToken'], message)
          # end
        end
      end
    end

private
# response = client.get_profile(user_id)
# case response
# when Net::HTTPSuccess then
#   contact = JSON.parse(response.body)
#   user_name = contact['displayName']
#   p contact['pictureUrl']
#   p contact['statusMessage']
# else
#   p "#{response.code} #{response.body}"
# end

def get_line_UserProfile(user_id)
  response  = client.get_profile(user_id)
  case response
  when Net::HTTPSuccess then
    contact = JSON.parse(response.body)
  else
    p "#{response.code} #{response.body}"
  end
end

def send_greeting

end

def send_menu
end


end
