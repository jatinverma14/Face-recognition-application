import React from "react";
import OptionButton from "./OptionButton";
import { useNavigate } from "react-router-dom";
import searchUsingImage from '../../website_images/searchUsingImage.jpg'
import searchUsingVideo from '../../website_images/searchUsingVideo.png'
import "../../CssStyle/missingPersonFrontPage.css";

export default function SearchForSusOptions() {
  let navigate = useNavigate();
  const routeChange = (link) => {
    let path = link;
    navigate(path);
  };
  return (
    <>
      <div className="FrontPageMissPerContainer">
        <span className="RegButton" onClick={() => {
            routeChange("/searchForSusUsingImg");
          }}
        >
          <OptionButton title="SEARCH USING IMAGE" img={searchUsingImage} />
        </span>
        <span className="SearchButton" onClick={() => {
            routeChange("/searchForSusUsingVid");
          }}
        >
          <OptionButton title="SEARCH USING VIDEO" img={searchUsingVideo} />
        </span>
      </div>
    </>
  );
}
