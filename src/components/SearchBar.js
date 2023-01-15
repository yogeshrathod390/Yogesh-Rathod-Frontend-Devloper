import React from "react";

function SearchBar(props) {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">SpaceX</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => props.serch_parent(e.target.value)}
            />
            {/* <a className="btn btn-outline-success" type="submit">
              Search
            </a> */}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
