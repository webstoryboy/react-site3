import React from "react";
import { Link } from "react-router-dom";

function ReferCont({ id, title, desc, use }) {
  return (
    <li>
      <Link to="/">
        <span className="num">{id}</span>
        <span className="num">{title}</span>
        <span className="num">{desc}</span>
        <span className="num">{use}</span>
      </Link>
    </li>
  );
}

export default ReferCont;
