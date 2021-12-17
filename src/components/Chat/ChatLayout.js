import React from 'react'

const ChatLayout = ({children}) => {
  return (
    <div className="container">
      <div className="row clearfix mt-5">
        <div className="col-lg-12">
          <div className="card chat-app">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLayout