import React, { useState } from "react";
import "../../CssStyle/regMissPer.css";

export default function RegisterMissingPerson() {
  const [value, setValue] = useState({
    missPerName: "",
    missPerAdd: "",
    missPerAge: "",
    yourName: "",
    yourPhnNum: "",
    yourEmail: "",
    missPerImg: "",
    formData: new FormData(),
  });

  const { formData } = value;

  const postData = (data) => {
    return fetch("http://localhost:4000/register", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        alert("Data Saved Successfully");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (name) => (event) => {
    const val =
      name === "missPerImg" ? event.target.files[0] : event.target.value;
    formData.set(name, val);
    setValue({ ...value, [name]: val });
  };

  return (
    <>
      <div className="form">
        <div className="form_logo">
          Register<span>Missing</span>Person
        </div>
        <form
          className="form_items"
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form_inputs">
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange("missPerName")}
              required
            />
            <label>Missing person's name</label>
          </div>
          <div className="form_inputs">
            <input
              type="number"
              autoComplete="off"
              onChange={handleChange("missPerAge")}
              required
            />
            <label>Missing person's age</label>
          </div>
          <div className="form_inputs">
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange("missPerAdd")}
              required
            />
            <label>Missing person's address</label>
          </div>
          <div className="form_inputs">
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange("yourName")}
              required
            />
            <label>Your name</label>
          </div>
          <div className="form_inputs">
            <input
              type="number"
              autoComplete="off"
              onChange={handleChange("yourPhnNum")}
              required
            />
            <label>Your phone number</label>
          </div>
          <div className="form_inputs">
            <input
              type="email"
              autoComplete="off"
              onChange={handleChange("yourEmail")}
              required
            />
            <label>Your email id</label>
          </div>
          <div className="form_inputs">
            <span>Missing person's image</span>
            <input type="file" onChange={handleChange("missPerImg")} />
          </div>
          <button onClick={() => postData(formData)} className="form_button">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
