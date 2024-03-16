import "./messenger.css";
import Topbar from "../../components/topbar/Topbar.jsx";
import Conversation from "../../components/conversation/Conversation.jsx";
import Message from "../../components/message/Message.jsx";
import ChatOnline from "../../components/chatOnline/ChatOnline.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";

export default function Messenger() {
  const REQUEST_URL = "http://localhost:3000/api/";
  const [conversations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get(
          `${REQUEST_URL}conversations/${user._id.$oid}`
        );
        setConversations(res.data);
      } catch (err) {
        console.log(error);
      }
    };
    fetchConversations();
  }, []);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              className="chatMenuInput"
              placeholder="Search for friends"
            />
            {conversations.map((c) => (
              <Conversation key={c._id} conv={c} currentUser={user} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                placeholder="write something..."
                className="chatMessageInput"
              ></textarea>
              <button className="chatSendBtn">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
