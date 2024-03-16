import { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

export default function Conversation({ conv, currentUser }) {
  const REQUEST_URL = "http://localhost:3000/api/";
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conv.members.find((m) => m !== currentUser._id);
    console.log(conv._id);
    const getUser = async () => {
      try {
        const res = await axios(`${REQUEST_URL}users?userId=${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conv]);

  return (
    <div className="conversation">
      <img
        src="https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg"
        alt="groot"
        className="coversationImg"
      />
      <span className="conversationName">Groot </span>
    </div>
  );
}
