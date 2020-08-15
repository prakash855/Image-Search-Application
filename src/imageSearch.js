import React from "react";
import "./styles/ImageSearch.css";

const ImageSearch = (props) => {
  return (
    <div className="imageSearch">
      <form onSubmit={props.handleGetRequest} className={"imageSearch__form"}>
        <input
          type="text"
          autoComplete="off"
          name="searchValue"
          placeholder="search for images"
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};
export default ImageSearch;
