import React, { useState } from "react";
import "../styles/banner.scss";
import { NavLink } from "react-router-dom";
import QR from "../styles/background/qr.png";

const PARAGRAPH_HEAD = "Исполните мечту вашего малыша! Подарите ему собаку!";
const PARAGRAPH_INNER = "Сканируйте QR-код или нажмите ОК";

const Banner = ({ handleShowChange, isShow }) => {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    handleShowChange(show);
  };
  return (
    <div className="banner">
      <p className="banner_paragraph_head">{PARAGRAPH_HEAD}</p>
      <img alt="qr" src={QR} className="banner_qr" />
      <p className="banner_paragraph_inner">{PARAGRAPH_INNER}</p>
      <NavLink to="/input">
        <button className="banner_button" onClick={handleButtonClick}>
          OK
        </button>
      </NavLink>
    </div>
  );
};

export default Banner;
