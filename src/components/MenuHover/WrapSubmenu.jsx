import React from "react";

export default function WrapSubmenu({ children , myRef}) {
  return (
    <div
      id="subMenu"
      ref = {myRef}
      className="absolute inset-y-2 z-50 w-2/3 overflow-hidden rounded bg-transparent text-gray-700 top-0 hide"
      style={{ height: "410px", zIndex: 99, left: "0px", width: "100%" }}
    >
      {children}
    </div>
  );
}
