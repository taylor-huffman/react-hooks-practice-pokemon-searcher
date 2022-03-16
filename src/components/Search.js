import React from "react";

function Search({ search, setSearch }) {

  function handleOnChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={handleOnChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
