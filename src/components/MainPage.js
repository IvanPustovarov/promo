import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../styles/mainpage.scss";
import "../styles/banner.scss";
import Banner from "./Banner";
import QR from "../styles/background/qr.png";

import Cancel from "./Cancel";
import Input from "./Input";

const PARAGRAPH_HEAD = "Исполните мечту вашего малыша! Подарите ему собаку!";
const PARAGRAPH_INNER = "Сканируйте QR-код или нажмите ОК";

const MainPage = () => {
  const [show, setShow] = useState(true);

  const showBanner = () => {
    if (show) {
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
    }
  };

  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <div className="main">
      {showBanner()}
      <Switch>
        <Route path="/input" component={Input} />
      </Switch>
    </div>
  );
};

export default MainPage;
