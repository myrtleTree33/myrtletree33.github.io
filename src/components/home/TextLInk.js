import React from "react";

import "./TextLink.css";

const TextLink = ({ text, to }) => {
  return (
    <span>
      <a href={to} className="textLink">
        {text}
      </a>
    </span>
  );
};

export default TextLink;
