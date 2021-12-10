import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="row">
      <div className="column">
        <FontAwesomeIcon icon={faCoffee} className="leftIcon" />
      </div>
      <div className="column">
        <h2>Get Quote</h2>
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faCoffee} className="rightIcon" />
      </div>
    </div>
  );
};

export default Header;
