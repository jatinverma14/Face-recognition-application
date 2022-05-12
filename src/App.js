import React from "react";
import ApplicationOption from "./JSX Components/HomePage/ApplicationOption";
import FrontPageMissingPerson from './JSX Components/MissingPerson/FrontPageMissingPerson';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ApplicationOption />} />
        <Route exact path="/findmissingperson" element={<FrontPageMissingPerson />} />
      </Routes>
    </>
  );
}
