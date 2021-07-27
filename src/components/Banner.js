import React from "react";
import "../styles/banner.scss";
import QR from "../styles/background/qr.png";

const PARAGRAPH_HEAD = "Исполните мечту вашего малыша! Подарите ему собаку!";
const PARAGRAPH_INNER = "Сканируйте QR-код или нажмите ОК"

const Banner = () => {
  return (
    <div className="banner">
      <p className="banner_paragraph_head">{PARAGRAPH_HEAD}</p>
      <img alt="qr" src={QR} className="banner_qr"/>
      <p className="banner_paragraph_inner">{PARAGRAPH_INNER}</p>
      <button className="banner_button">OK</button>
    </div>
  );
};

export default Banner;
