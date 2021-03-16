import React from "react";

function Header({ searchValue, setSearchValue }) {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="header">
      <div className="header-title">Our Latest Developments</div>
      <div className="header-search-bar">
        <span>Filter</span>
        <div>
          <input
            onChange={(e) => handleSearch(e)}
            value={searchValue}
            type="search"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
