import React from "react";

function Nav() {
  return (
    <header className="header">
      <h1 className="initials">DC</h1>
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">My Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
