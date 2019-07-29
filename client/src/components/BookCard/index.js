import React from "react";
import "./style.css";

function BookCard(props) {
  return (
    <div className="bookDiv">
      <div className="top">
        <div className="bookInfo">
          {props.title}
          {props.author}{" "}
        </div>
        <div className="buttons"> </div>
      </div>
      <div className="bottom">
        <img alt="" scr={props.image} />
        <p> {props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
