import React from 'react'

const TheirMessage = ({ lastmessage ,message }) => {
  
  
  const isFirstMessageByUser = !lastmessage || lastmessage.sender.username !== message.sender.username; 

  
  return (
    <div className="message-row">
      {
        isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{backgroundImage : `url(${message?.sender?.avatar})`}}
          />
        )
      }
      {
        (message?.attachments?.length) > 0 
        ? (
          <img
            src= {message.attachments[0].file}
            alt= "Message Attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
          />
        ) : (
          <div className="message" style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px" : "48px" }}>
            {message.text}
          </div>
        )
      }
    </div>
  );
}

export default TheirMessage;
