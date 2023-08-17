
import React from 'react'
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react"


const API_KEY = "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";
function Chat() {
  const [typing,setTyping]= useState(false)
  const [messages,setMessages]=useState([
    {
      message:"Hello,I am your Gymguru",
      sender:"ChatGPT"

    }
  ])

  const handleSend = async (message)=>{
    const newMessage = {
      message: message,
      sender: "user",
      direction:"outgoing"
    }
    const newMessages = [...messages,newMessage];

    setMessages(newMessages)
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages){
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const systemMessage = {
      role:"system",
      content: "Explain all the things like you are a professional body builder."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setTyping(false);
    });
  }
  return (
    <div >
      
      <div style={{position:"relative",height:"800px",width:"700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing?<TypingIndicator content="ChatGPT is typing"/>:null}
            >
            {messages.map((message,i)=>{
              return <Message key={i} model={message}/>
            })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    
    </div>
  );
}
export default Chat;
