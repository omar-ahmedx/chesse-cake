import React from "react";

const Message = () => {
  return (
    <div className="message-sent">
      <span className="text-close mouse-hover" onClick={closeText}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect
            className="first-line-transition"
            x="20"
            y="30"
            width="65"
            height="7"
          ></rect>
          <rect
            className="sec-line-transition"
            y="50"
            width="65"
            height="7"
          ></rect>
        </svg>
      </span>
      <h2>Thank You</h2>
      <p>We can't wait to read your message and will be in touch soon</p>
    </div>
  );
};

export default Message;
