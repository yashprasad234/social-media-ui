import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Groot</span>
      </div>
    </div>
  );
}
