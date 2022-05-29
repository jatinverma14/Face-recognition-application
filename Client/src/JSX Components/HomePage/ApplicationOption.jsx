import React from "react";
import OptionCard from "./OptionCard";
import "../../CssStyle/homePage.css";
import FindMissingPeople from "../../website_images/FindMissingPeople.jpg";
import FaceLogin from "../../website_images/FaceLogin.jpg";
import FaceDetectionGame from "../../website_images/FaceDetectionGame.jpg";

export default function ApplicationOption() {
  return (
    <>
      <div className="AppOptionContainer">
        <div className="AppOptionContainerHeading">
          <p className="para1">
            Welcome to Face Recognition Applications Web app
          </p>
          <p className="para2">
            You have the following options to see the applications of Face
            Recognition
          </p>
        </div>
        <div className="ApplicationOptions">
          <OptionCard
            head="Find Mising Person"
            info="In this u can find missing person using image and vdo survelliance. You'll also have the feature to register the missing person."
            img={FindMissingPeople}
            path = "/findmissingperson"
            />
          <OptionCard
            head="Face Expressions"
            info="In this, you can see the face detection and expressions of the human"
            img={FaceLogin}
            path = "/searchforsususingvid"
            />
          <OptionCard
            head="Face Detection Game"
            info="Not developed yet! I will be developing this after some time"
            img={FaceDetectionGame}
            path = "/"
          />
        </div>
      </div>
    </>
  );
}
