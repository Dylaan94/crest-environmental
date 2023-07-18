import React from "react";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="w-full flex flex-col items-center ">
      <Header />
      {children}
    </div>
  );
}
