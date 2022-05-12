import React from "react";
import OptionButton from "./OptionButton";
import RegisterMissing from "../../website_images/RegisterMissing.jpg";
import SearchForSus from "../../website_images/SearchForSus.png";
import '../../CssStyle/missingPersonFrontPage.css'

export default function FrontPageMissingPerson() {
  return (
    <>
      <div className="FrontPageMissPerContainer">
        <span className="RegButton"><OptionButton title="REGISTER MISSING PERSON" img={RegisterMissing} /></span>
        <span className="SearchButton"><OptionButton title="SEARCH FOR SUSPECT" img={SearchForSus} /></span>
      </div>
    </>
  );
}
