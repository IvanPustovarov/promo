import React, { useState, useEffect } from "react";
import "../styles/input.scss";

const Input = () => {
  const [number, setNumber] = useState("");
  const [numberValid, setNumberValid] = useState(false);
  const [check, setCheck] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [statement, setStatement] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(number);
    setStatement(true)
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
    if(newValue.length < 10) {
      setButtonDisabled(true)
    }
  };

  const handleCheck = (checker, valid) => {
    setCheck(!checker);
    if(checker && valid) {
       return setButtonDisabled(true);
    }
    return setButtonDisabled(false);
  };

  const checkWithRegex = (value) => {
    let valid = false;
    const regex = /^[9]{1}[12356789]{1}[\d]{8}$/;
    setNumber(value);
    if (value.length < 10) {
      setNumberValid(false);
    }
    if (value.length === 10) {
      valid = regex.test(value);
      setNumberValid(valid);
    }
    if (value.length > 10) {
      let newString = value.slice(0, 10);
      let valid = regex.test(newString);
      setNumber(newString);
      setNumberValid(valid);
    }
  };

  const createNumber = () => {
    let numbers = [];
    for (let index = 1; index < 10; index++) {
      const divContainer = React.createElement(
        "div",
        { onClick: () => handleNumberClick(index, check), key: index },
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
  if(statement){
    return (
      <div className="container">
        <div className="statement">
          <span className="statement_accept">заявка принята</span>
          <p className="statement_text">Держите телефон под рукой. <br/> Скоро с Вами свяжется наш менеджер. </p>
        </div>
      </div>
    )
  }
  return (
    <div className="container">
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
        <div
          className="input__zero"
          onClick={() => handleNumberClick(0)}
        >
          0
        </div>
      </div>
      <div className="input__agreement">
        <label className="input__check">
          <input
            type="checkbox"
            onChange={() => handleCheck(check, numberValid)}
            disabled={!numberValid}
          />
          <span className="input__label"></span>
        </label>
        <span className="input__span-text">
          согласие на обработку персональных данных
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className= {buttonDisabled ? "input__button-submit" : "able" }
          disabled={buttonDisabled}
        >
          Подтвердить номер
        </button>
      </form>
    </div>
  );
};

export default Input;
