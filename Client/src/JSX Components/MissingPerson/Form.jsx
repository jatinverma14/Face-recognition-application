import React from "react";
import "../../CssStyle/regMissPer.css";

export default function Form(props) {
  return (
    <div className="form">
      <div className="form_logo">
        {props.head}<span>Missing</span>Person
      </div>
      <form className="form_items">
        <div className="form_inputs">
          <input type="text" autoComplete="off" required/>
          <label>{props.name} name</label>
        </div>
        <div className="form_inputs">
          <input type="number" autoComplete="off" required/>
          <label>{props.name} age</label>
        </div>
        <div className="form_inputs">
          <input type="text" autoComplete="off" required/>
          <label>{props.name} address</label>
        </div>
        <div className="form_inputs">
          <input type="text" autoComplete="off" required/>
          <label>Your name</label>
        </div>
        <div className="form_inputs">
          <input type="number" autoComplete="off" required/>
          <label>Your phone number</label>
        </div>
        <div className="form_inputs">
          <input type="email" autoComplete="off" required/>
          <label>Your email id</label>
        </div>
        <div className="form_inputs">
          <span>{props.name} image</span>
          <input type="file" required/>
        </div>
        <button className="form_button">Upload</button>
      </form>
    </div>
  );
}