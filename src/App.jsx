import React, { useState } from "react";
import "./App.css";
import { Header, CompanyInfo, Services, Footer } from "./components/";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <Header />
        <CompanyInfo />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
