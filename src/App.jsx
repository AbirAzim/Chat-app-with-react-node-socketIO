import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

export function App() {

  if(!localStorage.getItem('username')) return <LoginForm /> 
  return (
		  <ChatEngine
			  height='100vh'
			  userName={localStorage.getItem('username')}
			  userSecret={localStorage.getItem('password')}
			  projectID='6505dbeb-2277-4402-96fb-891359f80192'
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
		  />
  );
}