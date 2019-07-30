import React from "react";

function FormBtn(props) {
  return (
    <button {...props} className="btn btn-outline-dark mb-5">
      {props.children}
    </button>
  );
}

export default FormBtn;
