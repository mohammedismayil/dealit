import React from "react";

export default function HomeProductCard() {
  return (
    <div className="w-1/4 border border-gray-300 shadow-sm rounded-md ml-10 mb-10 content-center justify-center flex flex-col">
      <div>
        <img
          className="p-5"
          src="https://apollo-singapore.akamaized.net/v1/files/xtd7smj45nv41-IN/image;s=272x0"
        ></img>
      </div>
      <div className="flex">
        <div className="bg-yellow-300 w-2 mr-5"></div>
        <div>
          <div className="text-lg font-strong">$13,333</div>
          <div>Condition fresh laptop 8gb ram 500gbbhdd i5 laptop laptop</div>

          <div className="flex flex-end">
            <div>Indirapuram, Ghaziabad</div>
            <div>Oct 20</div>
          </div>
        </div>
      </div>
    </div>
  );
}
