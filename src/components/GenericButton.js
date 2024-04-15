import React from 'react';
import { Link } from 'react-router-dom';
import "./GenericButton.css"

function GenericButton({ to, children }) {
  return (
    <Link to={to} className="generic-button">
      <span>{children}</span>
      <span className="arrow">&#8250;</span>
    </Link>
  );
}

export default GenericButton;
