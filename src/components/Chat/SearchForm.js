import React from "react";

const SearchForm = ({ search, setSearch }) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
