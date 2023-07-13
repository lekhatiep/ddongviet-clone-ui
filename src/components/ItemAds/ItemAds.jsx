import React from "react";

export default function ItemAds({ data }) {
  var { href, src } = data;
  return (
    <a
      href={href}
      className="h-[132px] overflow-hidden rounded max-md:col-span-1 mb-0 max-md:h-[133px] relative w-full"
    >
      <img
        src={src}
        alt="IPAD 9"
        className="h-[132px] md:object-cover max-md:h-[133px] object-fill w-full"
      />
    </a>
  );
}
