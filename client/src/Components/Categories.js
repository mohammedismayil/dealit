import React from "react";

export default function Categories() {
  return (
    <div className="flex m-2 ">
      <div className="flex">
        <button className="flex">
          <div className="font-bold text-sm mx-2">ALL CATEGORIES </div>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            class=""
            fill-rule="evenodd"
          >
            <path
              class="rui-4K4Y7"
              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
            ></path>
          </svg>
        </button>

        <li>
          <button className="mx-2 text-sm">Cars</button>
          <button className="mx-2 text-sm">Motorcycles</button>
          <button className="mx-2 text-sm">Bikes</button>
          <button className="mx-2 text-sm">Mobile phones</button>
          <button className="mx-2 text-sm">Commercial & Other Vehicles</button>
        </li>
      </div>
    </div>
  );
}
