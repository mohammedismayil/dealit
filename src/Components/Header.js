import React from "react";
import HeaderTitleIcon from "./HeaderTitleIcon";
import LanguageDropDownButton from "./LanguageDropDownButton";
import Searchicon from "./Searchicon";
export default function Header() {
  return (
    <div className="flex mt-5 ml-5">
      <HeaderTitleIcon className="mx-5"></HeaderTitleIcon>
      <div className="flex ml-4 border-black border-2 rounded-md">
        <Searchicon height="20px" width="20px" isSmall={true}></Searchicon>
        <input
          type="text"
          placeholder="Search.."
          className="  pl-5  ml-4 h-12"
        ></input>
      </div>

      <div className="ml-5  border-black border-2 rounded-md w-1/2 justify-center content-center flex">
        <input
          type="text"
          placeholder="Find cars, Mobile phones and more"
          className="pl-4  w-full h-12"
        ></input>
        <button className=" w-10 h-10 content-center justify-center">
          <Searchicon
            fill="black"
            stroke="black"
            height="25px"
            width="25px"
          ></Searchicon>
        </button>
      </div>

      <div className="flex pr-0 ml-5 mr-10 ">
        <LanguageDropDownButton></LanguageDropDownButton>
        <button className="mx-5">Login</button>
        <button className="mx-5">Sell</button>
      </div>
    </div>
  );
}
