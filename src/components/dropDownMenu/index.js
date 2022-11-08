import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import "./styles.scss";

const DropDownMenu = (props) => {
  const { showMenu, setShowMenu } = props;

  return ReactDOM.createPortal(
    <div className="dropDownMenu">
      <FaTimes
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="dm_close"
      />
      <a href="#" className="dm_link">
        Home
      </a>

      <a href="#" className="dm_link">
        Monthly Best Sellers
      </a>

      <a href="#" className="dm_link">
        For him
      </a>
      <a href="#" className="dm_link">
        For her
      </a>
      <a href="#" className="dm_link">
        Home
      </a>
      <a href="#" className="dm_link">
        Sports
      </a>
      <a href="#" className="dm_link">
        Best Sellers
      </a>
      <a href="#" className="dm_link">
        Tech
      </a>
    </div>,
    document.getElementById("modal-root")
  );
};

export default DropDownMenu;
