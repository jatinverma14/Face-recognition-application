import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js";
// import axios from "axios";
import "../../CssStyle/regMissPer.css";

export default function SearchForSusUsingImage() {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [value, setValue] = useState({
    yourName: "",
    yourPhnNum: "",
    yourEmail: "",
    susImg: "",
    formData: new FormData(),
  });

  const { yourName, yourPhnNum, yourEmail, susImg, formData } = value;

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      Promise.all([
        // faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        // faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  }, []);

  const handleChange = (name) => (event) => {
    const val = name === "susImg" ? event.target.files[0] : event.target.value;
    formData.set(name, val);
    setValue({ ...value, [name]: val });
  };

  const search = async (e) => {
    e.preventDefault();
    const labeledFaceDescriptors = await uploadedImages();
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);
    console.log(faceMatcher);
    const image = await faceapi.bufferToImage(susImg);
    if (!image) return Error;
    const detections = await faceapi
      .detectAllFaces(image)
      .withFaceLandmarks()
      .withFaceDescriptors();
    if (!detections) return Error;
  };

  const uploadedImages = () => {
    const labels = ["Amir", "Deepika", "Hrithik", "John", "Roman", "Salman"];
    return Promise.all(
      labels.map(async (label) => {
        const descriptions = [];
        for (let i = 1; i <= 3; i++) {
          const img = await faceapi.fetchImage(
            `https://github.com/jatinverma14/Face-recognition-application/tree/main/Client/public/Uploads/${label}/${i}.jpg`
          );
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptors();
          descriptions.push(detections.descriptor)
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  };

  return (
    <>
      {modelsLoaded === true ? (
        <div className="form">
          <div className="form_logo">
            Finding<span>Missing</span>Person
          </div>
          <form className="form_items" onSubmit={search}>
            <div className="form_inputs">
              <input type="text" autoComplete="off" required />
              <label>Suspect's name</label>
            </div>
            <div className="form_inputs">
              <input type="number" autoComplete="off" required />
              <label>Suspect's age</label>
            </div>
            <div className="form_inputs">
              <input type="text" autoComplete="off" required />
              <label>Suspect's address</label>
            </div>
            <div className="form_inputs">
              <input
                type="text"
                onChange={handleChange("yourName")}
                autoComplete="off"
                required
              />
              <label>Your name</label>
            </div>
            <div className="form_inputs">
              <input
                type="number"
                onChange={handleChange("yourPhnNum")}
                autoComplete="off"
                required
              />
              <label>Your phone number</label>
            </div>
            <div className="form_inputs">
              <input
                type="email"
                onChange={handleChange("yourEmail")}
                autoComplete="off"
                required
              />
              <label>Your email id</label>
            </div>
            <div className="form_inputs">
              <span>Suspect's image</span>
              <input type="file" onChange={handleChange("susImg")} required />
            </div>
            <button type="submit" className="form_button">
              Upload
            </button>
          </form>
        </div>
      ) : (
        <h1 className="loadingModels">Loading Models...</h1>
      )}
    </>
  );
}
