import React, { useEffect, useRef, useState } from 'react'
import { ChatBotBody, ChatbotContainer, ChatBotFooter, ChatBotHead, Choice, Message, TypingAnimation } from './components'

function Chatbot({setToggleChatbot}: {setToggleChatbot: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [messageList, setMessageList] = useState<any[]>([
    'Hello, How can i help you?'
  ] as any[])

  const [choiceList] = useState([
    'Adopt a pet',
    'How to adopt',
    'Operational schedule (9 to 5)',
    'Location'
  ])
const [toggleTyping, setToggleTyping] = useState(false)
const messageListRef = useRef<HTMLDivElement>(null)
  const handleClick = (choice: string) => {
    setMessageList(prev => [...prev, choice])
    setToggleTyping(true)
    setTimeout(() => {
      setMessageList(prev => {
        if (choice == choiceList[0]) {
        setToggleTyping(false)
          return [...prev, <>Create an account and select an animal/s you want to adopt in the adoption tab. The organization will notify you on the success of the procedure. for more info please visit our facebook page by clicking this <a href="https://www.facebook.com/Noahsarkdogandcatshelter">link</a></>]
        }
        else if (choice == choiceList[1]) {
        setToggleTyping(false)
          return [...prev, 'Click apply in the adoption tab and wait for the confirmation of the application. ']
        }
        else if(choice == choiceList[2]) {
        setToggleTyping(false)
          return [...prev, 'The operational schedule of the the animal shelter is from 9:00 am to 5:00 pm Monday to Saturday. Schedule may change without prior notice in case of emergency. ']
        }
        else if (choice == choiceList[3]) {
        setToggleTyping(false)
          return [...prev, 'The animal shelter is located at Mabalacat, Pampanga.']
        } else {
          setToggleTyping(false)
          return prev;
        }
      })
    }, 2000)
    }
  useEffect(() => {
    if(messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messageList, toggleTyping])

  return (
    <ChatbotContainer>
      <ChatBotHead onClick={() => setToggleChatbot(false)}>
        <h1>Noah's Ark Partner <i className="fa-solid fa-shield-dog"></i></h1>
      </ChatBotHead>

      <ChatBotBody ref={messageListRef}>
        {
          messageList.map(chat => <Message> {chat} </Message>)
        }
        {
          toggleTyping && <TypingAnimation><i className="fa-solid fa-ellipsis typing"></i></TypingAnimation>
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