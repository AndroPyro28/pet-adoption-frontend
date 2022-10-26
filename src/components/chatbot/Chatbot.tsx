import React, { useEffect, useRef, useState } from 'react'
import { domParser } from '../../helper/DomParser'
import { ChatBotBody, ChatbotContainer, ChatBotFooter, ChatBotHead, Choice, Message } from './components'

function Chatbot({setToggleChatbot}: {setToggleChatbot: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [messageList, setMessageList] = useState<any[]>([
    'Hello, How can i help you?'
  ] as any[])
  const [choiceList, setChoiceList] = useState([
    'I want to adopt pet',
    'How to adopt pet?'
  ])
const messageListRef = useRef<HTMLDivElement>(null)
  const handleClick = (choice: string) => {
    setMessageList(prev => {

      if (choice.includes('I want to adopt pet')) {
        return [...prev, choice, <p>Please go to our facebook page by clicking this <a href='https://www.facebook.com/Noahsarkdogandcatshelter'>fb link</a>  </p>]
      } else if (choice.includes('How to adopt pet?')) {
        return [...prev, choice, <p>
          How to adopt?
          <br />
          <br />
          <br />
          1. Signup and fill the important details.
          <br />
          <br />
          2. Access the website by logging in.
          <br />
          <br />

          3. Choose the pet that you love and make an appointment schedule.

        </p>]

      }
      return prev
    })
  }
  useEffect(() => {
    if(messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messageList])
  return (
    <ChatbotContainer>
      <ChatBotHead onClick={() => setToggleChatbot(false)}>
        <h1>Noah's Ark Partner <i className="fa-solid fa-shield-dog"></i></h1>
      </ChatBotHead>

      <ChatBotBody ref={messageListRef}>
        {
          messageList.map(chat => <Message> {chat} </Message>)
        }
      </ChatBotBody>

      <ChatBotFooter>
        {
          choiceList.map(choice => <Choice onClick={() => handleClick(choice)}>{choice}</Choice>)
        }
      </ChatBotFooter>
    </ChatbotContainer>
  )
}

export default Chatbot