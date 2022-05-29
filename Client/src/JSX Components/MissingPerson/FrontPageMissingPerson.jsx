import React from "react";
import OptionButton from "./OptionButton";
import RegisterMissing from "../../website_images/RegisterMissing.jpg";
import SearchForSus from "../../website_images/SearchForSus.png";
import { useNavigate } from "react-router-dom";
import "../../CssStyle/missingPersonFrontPage.css";

export default function FrontPageMissingPerson() {
  let navigate = useNavigate();
  const routeChange = (link) => {
    let path = link;
    navigate(path);
  };
  return (
    <>
      <div className="FrontPageMissPerContainer">
        <span className="RegButton" onClick={()=>{
          routeChange('/registermissingperson')
        }}>
          <OptionButton title="REGISTER MISSING PERSON" img={RegisterMissing} />
        </span>
        <span className="SearchButton" onClick={()=>{
          routeChange('/searchforsus')
        }}>
          <OptionButton title="SEARCH FOR SUSPECT" img={SearchForSus} />
        </span>
      </div>
    </>
  );
}
