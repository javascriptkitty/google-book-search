import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";

function BookCard(props) {
  return (
    <div className="bookDiv">
      <div className="top">
        <div className="bookInfo">
          <h3> {props.title} </h3>
          <h5> {props.authors} </h5>
        </div>
        <div className="buttons">
          <ViewBtn {...props} />
          {props.showDelete ? (
            <DeleteBtn {...props} onClick={() => props.deleteBook(props.id)} />
          ) : null}
          {props.showSave ? (
            <SaveBtn {...props} onClick={() => props.saveBook(props.id)} />
          ) : null}
        </div>
      </div>
      <div className="bottom">
        <img alt="" src={props.image} />
        <p> {props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
