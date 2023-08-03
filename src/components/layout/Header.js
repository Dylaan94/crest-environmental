import React from "react";

// image imports

import logo from "../../images/logo-transparent.png";

export default function Header() {
  return (
    <div className="bg-gray-200 w-full flex justify-center h-32">
      <div className="w-11/12 max-w-screen-xl flex justify-between items-center">
        <img class="w-64" src={logo} alt="logo" />
        <a
          href="mailto:jonathan@crestenvironmental.co.uk"
          class="text-xl px-4 py-2 rounded-lg text-crest-green bg-crest-blue hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
