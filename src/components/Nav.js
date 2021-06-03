import React, { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(true);

  return (
    <nav className="nav">
      <h1 className="nav-header">DC</h1>
      <ul className="nav-items">
        <li>
          1. <a href="#">About Me</a>
        </li>
        <li>
          2. <a href="#">My Work</a>
        </li>
        <li>
          3. <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
