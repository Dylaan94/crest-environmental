import React from "react";

// image imports
import maintenence from "../images/maintenence.png";

export default function HoldingPage() {
  return (
    <div className="holdingPage w-full flex justify-center h-[calc(100vh-8rem)] py-12">
      <div className="holdingPage-container w-11/12 max-w-screen-xl flex">
        <div className="holdingPage-content w-1/3 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-crest-blue">
            Sorry, site under maintenance
          </h1>
          <p className="text-xl text-crest-blue">Please check back soon</p>
        </div>
        <div className="holdingPage-image w-2/3 max-h-96">
          <img src={maintenence} alt="under maintenance" />
        </div>
      </div>
    </div>
  );
}
