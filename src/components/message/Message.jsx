import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg"
          alt=""
          className="messageImg"
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
