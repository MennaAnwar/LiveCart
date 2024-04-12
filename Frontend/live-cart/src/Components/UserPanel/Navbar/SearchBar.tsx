import { FC, useState } from "react";
import "./Navbar.css";

const SearchBar: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const openSearch = () => {
    setIsActive(true);
  };

  const closeSearch = () => {
    setIsActive(false);
  };

  return (
    <div className={`menu-inner ${isActive ? "is-active" : ""}`}>
      <span>
        <i className="bx bx-search search-toggle" onClick={openSearch}></i>
      </span>
      <div className={`search-block ${isActive ? "is-active" : ""}`}>
        <form className="search-form">
          <span>
            <i
              className="bx bx-arrow-back search-cancel"
              onClick={closeSearch}
            ></i>
          </span>
          <input
            type="search"
            name="search"
            className="search-input"
            placeholder="Search here..."
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
