import React from "react";

// image imports
import maintenence from "../images/maintenence.png";

export default function HoldingPage() {
  return (
    <div className="holdingPage w-full flex justify-center h-[calc(100vh-8rem)] py-12">
      <div className="holdingPage-container w-11/12 max-w-screen-xl flex flex-col sm:flex-row">
        <div className="holdingPage-content mb-6 sm:mb-0 text-center sm:text-left w-full sm:w-1/3 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-crest-blue">
            Sorry, site under maintenance
          </h1>
          <span className="text-xl lg:text-2xl mt-4 text-crest-blue">
            <p>Please check back soon, or feel free to </p>{" "}
            <a
              class="font-bold underline hover:cursor-pointer"
              href="mailto:jonathan@crestenvironmental.co.uk"
            >
              contact us
            </a>
          </span>
        </div>
        <div className="holdingPage-image sm:w-2/3 w-full flex items-center justify-end">
          <img src={maintenence} alt="under maintenance" class="max-h-96" />
        </div>
      </div>
    </div>
  );
}
