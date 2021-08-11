import React, { useState, useEffect } from "react";
import "../styles/input.scss";

const Input = () => {
  const [number, setNumber] = useState("");
  const [numberValid, setNumberValid] = useState(false);
  const [check, setCheck] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(number);
  };

  const handleNumberClick = (value) => {
    let newValue = value.toString(10);
    let newString = `${number}${newValue}`;
    checkWithRegex(newString);
  };

  const handleDeleteClick = (value) => {
    let newValue = value.slice(0, -1);
    setNumber(newValue);
    checkWithRegex(newValue);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.log(check);
  };

  const checkWithRegex = (value) => {
    const regex = /^[9]{1}[12356789]{1}[\d]{8}$/;
    if (value.length < 10) {
      setNumber(value);
      setNumberValid(false);
    }
    if (value.length === 10) {
      setNumber(value);
      let valid = regex.test(value);
      setNumberValid(valid);
    }
    if (value.length > 10) {
      setNumber(value);
      let newString = value.slice(0, 10);
      let valid = regex.test(newString);
      setNumberValid(valid);
    }
  };

  const createNumber = () => {
    let numbers = [];
    for (let index = 1; index < 10; index++) {
      const divContainer = React.createElement(
        "div",
        { onClick: () => handleNumberClick(index), key: index },
        `${index}`
      );
      numbers.push(divContainer);
    }
    return numbers;
  };

  const setInputNumber = (value) => {
    let patternString = "+7(___)___-__-__";
    if (number.length) {
      value.split("").forEach((el) => {
        patternString = patternString.replace("_", el);
      });
      return patternString;
    }
    return patternString;
  };

  const numbers = createNumber();
  return (
    <div className="input">
      <span className="input__text-number">
        Введите ваш номер мобильного телефона
      </span>
      <span className="input__phone">{setInputNumber(number)}</span>
      <p className="input__paragraph">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className="input__numbers">{numbers}</div>
      <div className="input__delete">
        <div
          className="input__backspace"
          onClick={() => handleDeleteClick(number)}
        >
          стереть
        </div>
        <div className="input__zero" onClick={() => handleNumberClick(0)}>
          0
        </div>
      </div>
      <div className="input__agreement">
        <label className="input__check">
          <input
            type="checkbox"
            onChange={() => handleCheck()}
            disabled={!numberValid}
          />
          <span className="input__label"></span>
        </label>
        <span className="input__span-text">
          согласие на обработку персональных данных
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="input__button-submit">
          Подтвердить номер
        </button>
      </form>
    </div>
  );
};

export default Input;
