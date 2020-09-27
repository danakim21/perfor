import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation({ pageNum }) {
  return (
    <div id="navigationBar">
      <Link to="/" className="navigationTitle">
        PERFOR
      </Link>
      <nav>
        <Link to="/" className={pageNum === 0 ? "currentPage" : "otherPage"}>
          Home
        </Link>
        <Link
          to="/search"
          className={pageNum === 1 ? "currentPage" : "otherPage"}
        >
          Search
        </Link>
        <Link
          to="/my-perfume"
          className={pageNum === 2 ? "currentPage" : "otherPage"}
        >
          My Perfume
        </Link>
        <Link
          to="/about"
          className={pageNum === 3 ? "currentPage" : "otherPage"}
        >
          About
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
