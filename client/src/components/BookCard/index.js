import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn";
import SaveBtn from "../SaveBtn";

function BookCard(props) {
  return (
    <div className="bookDiv">
      <div className="top">
        <div className="bookInfo">
          <h3> {props.title} </h3>
          {props.authors}
        </div>
        <div className="buttons">
          {props.showDelete ? <DeleteBtn {...props} /> : null}
          <SaveBtn {...props} />
        </div>
      </div>
      <div className="bottom">
        <img alt="" scr={props.image} />
        <p> {props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
