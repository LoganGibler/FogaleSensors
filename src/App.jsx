import React, { useState } from "react";
import "./App.css";
import { Header, CompanyInfo, Services, Footer } from "./components/";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <CompanyInfo />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
