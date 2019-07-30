import React from "react";

function ViewBtn(props) {
  return (
    <a href={props.link} className="btn" {...props}>
      View{" "}
    </a>
  );
}

export default ViewBtn;
