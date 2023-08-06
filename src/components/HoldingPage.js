import React from "react";

// image imports
import maintenence from "../images/maintenence.png";
import logo from "../images/logo-transparent-2.png";
import brochureImage from "../images/brochure-image.jpg";

// brochure
import brochure from "../files/brochure.pdf";

export default function HoldingPage() {
  return (
    <div className="holdingPage w-full flex justify-center h-[calc(100vh-8rem)] py-12">
      <div className="holdingPage-container w-11/12 xl:w-3/4 max-w-screen-xl flex flex-col sm:flex-row">
        <div className="holdingPage-content mb-6 sm:mb-0 text-center sm:text-left w-full sm:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-crest-blue">
            Sorry, site under maintenance
          </h1>
          <span className="text-xl lg:text-2xl mt-4 text-crest-blue whitespace-pre-wrap">
            Please check back soon.{"\n"}Feel free to{" "}
            <a
              className="font-bold underline hover:cursor-pointer"
              href="mailto:info@crestenvironmental.co.uk"
            >
              contact us
            </a>{" "}
            or check out our{" "}
            <a
              href={brochure}
              download
              className="font-bold underline hover:cursor-pointer"
            >
              brochure
            </a>
          </span>
        </div>
        <div className="holdingPage-pdf sm:pl-8 sm:w-1/2 w-full flex items-center justify-end ">
          <a
            href={brochure}
            download
            className="w-auto h-full hover:cursor-pointer flex flex-col justify-center"
          >
            <img
              src={brochureImage}
              className="w-full h-auto max-h-[70vh]"
              alt="brochure"
            />
            <p className="text-center pt-2 italic">Click to download</p>
          </a>
        </div>
      </div>
    </div>
  );
}
