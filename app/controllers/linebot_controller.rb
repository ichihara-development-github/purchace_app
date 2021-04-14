require './lib/line_templates'

class LinebotController < ApplicationController

  include LineTemplates

  def push
  end

  def callback
    body = request.body.read
    events = client.parse_events_from(body)

    p "--------------------------#{ menu_template}------------------------"

    events.each do |event|

      case event
      when Line::Bot::Event::Message
        case event.type
        when Line::Bot::Event::MessageType::Text
          message = {
            type: 'text',
            text: response
          }
          client.reply_message(event['replyToken'], message)
        when Line::Bot::Event::MessageType::Image, Line::Bot::Event::MessageType::Video
          response = client.get_message_content(event.message['id'])
          tf = Tempfile.open("content")
          tf.write(response.body)
        end
      end

    # when Line::Bot::Event::Message
      # case event
      # when Line::Bot::Event::Message
      #   @line_user = User.find_by(line_id: event["source"]["userId"])
      #   case event.type
      #   when "message"
      #     client.reply_message(event['replyToken'], menu_template)
      #   end
      # when Line::Bot::Event::MessageType::Image
      #   message = {
      #      type: 'text',
      #      text: "thanks photo"
      #    }
      #   client.reply_message(event['replyToken'], message)
      # when Line::Bot::Event
      #     case event.type
      #     when "postback"
      #       client.reply_message(event['replyToken'], sticker_list("thanks"))
      #       client.reply_message(event['replyToken'], "#{events[1].data}")
      #     end
      # end
    end
  end
        # case event.type
        # when Line::Bot::Event::MessageType::Text
        #     message = menu_template
        #     client.reply_message(event['replyToken'], message)
        # when Line::Bot::Event::MessageType::Image
        #     client.reply_message(event['replyToken'], sticker_list("thanks"))
        #     # user_id = event["source"]["userId"]
        #     # client.reply_message(event['replyToken'], sticker_list("thanks"))
        # end
          # push(user_id)
          # @profile = get_line_UserProfile(user_id)
          # if check_line_user(user_id)
          #   send_menue
          # else
          #   message = send_greeting
          #   client.reply_message(event['replyToken'], message)
          # end


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

end
