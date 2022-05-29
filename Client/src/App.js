import React from "react";
import ApplicationOption from "./JSX Components/HomePage/ApplicationOption";
import FrontPageMissingPerson from './JSX Components/MissingPerson/FrontPageMissingPerson';
import RegisterMissingPerson from "./JSX Components/MissingPerson/RegisterMissingPerson";
// import SearchForSus from "./JSX Components/MissingPerson/SearchForSus";
// import SearchForSusOptions from "./JSX Components/MissingPerson/SearchForSusOptions";
import SearchForSusUsingImage from "./JSX Components/MissingPerson/SearchForSusUsingImage";
import SearchForSusUsingVideo from "./JSX Components/FaceExpression/SearchForSusUsingVideo";
import ShowImg from "./JSX Components/MissingPerson/ShowImg";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ApplicationOption />} />
        <Route exact path="/findmissingperson" element={<FrontPageMissingPerson />} />
        <Route exact path="/registermissingperson" element={<RegisterMissingPerson name = "registering" />} />
        <Route exact path="/searchforsus" element={<SearchForSusUsingImage />} />
        {/* <Route exact path="/searchforsusoption" element={<SearchForSusOptions />} /> */}
        <Route exact path="/searchforsususingimg" element={<SearchForSusUsingImage />} />
        <Route exact path="/searchforsususingvid" element={<SearchForSusUsingVideo />} />
        <Route exact path="/showimg" element={<ShowImg />} />
      </Routes>
    </>
  );
}
