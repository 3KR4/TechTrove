import '../Css/all-components.css'
import { useState } from 'react';
import { chat } from '../components/products';
import formatTime from '../components/formatTime';

// icons
import { IoChatbubbles, IoDocumentTextOutline } from "react-icons/io5";
import { LuSendHorizonal } from 'react-icons/lu';
import { GrGallery, GrAttachment } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export default function Chat() {
  const [openModels, setOpenModels] = useState({
    chat: false,
    chatInfo: false,
    chatImport: false,
    fullScreen: false,
  });
  const toggleModel = (modelName) => {
    setOpenModels(prevState => ({
      ...prevState,
      [modelName]: !prevState[modelName]
    }));
  };
  return (
    <>
    <button className='chatBtn' onClick={() => toggleModel('chat')}><IoChatbubbles/></button>
    <div className={`main-chat ${openModels.chat ? 'show' : ''} ${openModels.fullScreen ? 'full' : ''}`}>
    <div className="top">
        <h4>Contact Us</h4>
      <div className="info">
        <button onClick={() => toggleModel('chatInfo')}>Info</button>
        <div className={`data ${openModels.chatInfo ? 'active' : ''}`}>
          <h5>Phone: {chat.phone}</h5>
          <h5>Email: {chat.email}</h5>
        </div>
        <div onClick={() => toggleModel('fullScreen')}>
          {!openModels.fullScreen ? (<MdOutlineFullscreen/>) : (<MdOutlineFullscreenExit/>)}
        </div>
        <IoClose onClick={() =>   
          setOpenModels(prevState => ({
            ...prevState,
            chat: !prevState.chat,
            fullScreen: false
          })
        )}/>
      </div>
    </div>
    <div className="the-chat">
      {chat.chats.length > 0 ? (
        chat.chats.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender === 'You' ? 'send' : 'receive'}`}>
            <div className="holder">
              <div className="top">
                <span className="message-sender">{chat.sender}</span>
                <span className="message-timestamp">{formatTime(chat.timestamp)}</span>
              </div>
              <p>{chat.message}</p>
            </div>
          </div>
        ))
      ) : (
        <h3>No chat history yet.</h3>
      )}
    </div>
    <div className="bottom">
      <div className="importFiles main-buttom" onClick={() => toggleModel('chatImport')}>
        <h4>Import Files:</h4>
        <GrAttachment />
      </div>
      <ul className={`filesHolder ${openModels.chatImport ? 'active' : ''}`}>
        <li onClick={() => console.log("Import Photos & Videos")}>
          <GrGallery /> Photos & Videos
        </li>
        <li>
          <IoDocumentTextOutline style={{ fontSize: '18px' }} /> Documents
        </li>
      </ul>
      <textarea placeholder='Type a message' />
      <LuSendHorizonal className='send' />
    </div>
    </div>
    </>
  )
}
