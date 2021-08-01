import React, { useState, useEffect } from "react";
import "../styles/input.scss";

const Input = () => {
  const [number, setNumber] = useState("");
  const [numbersArray, setNumbersArray] = useState([]);

  const handleNumberClick = (value) => {
    let newValue = value.toString(10);
    setNumber(`${number}${newValue}`);
    console.log("value: ", value);

    return console.log("numbers(string):  ", number);
  };

  const createNumber = () => {
    for (let index = 1; index < 10; index++) {
      const divContainer = React.createElement(
        "div",
        { onClick: () => handleNumberClick(index), key: index },
        `${index}`
      );
      setNumbersArray((oldArray) => [...oldArray, divContainer]);
    }
    return numbersArray;
  };

  useEffect(() => {
    createNumber();
  }, []);
  return (
    <div className="input">
      <span className="input__text-number">
        Введите ваш номер мобильного телефона
      </span>
      <span className="input__phone">+7(_ _ _)_ _ _ - _ _ - _ _</span>
      <p className="input__paragraph">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className="input__numbers">
        {/* <div onClick= {()=> {handleNumberClick(1)}}>1</div>
          <div onClick= {()=> {handleNumberClick(2)}}>2</div>
          <div onClick= {()=> {handleNumberClick(3)}}>3</div>
          <div onClick= {()=> {handleNumberClick(4)}}>4</div>
          <div onClick= {()=> {handleNumberClick(5)}}>5</div>
          <div onClick= {()=> {handleNumberClick(6)}}>6</div>
          <div onClick= {()=> {handleNumberClick(7)}}>7</div>
          <div onClick= {()=> {handleNumberClick(8)}}>8</div>
          <div onClick= {()=> {handleNumberClick(9)}}>9</div> */}

        {numbersArray}
      </div>
      <div className="input__delete">
        <div className="input__backspace">стереть</div>
        <div className="input__zero" onClick={() => handleNumberClick(0)}>
          0
        </div>
      </div>
      <div className="input__agreement">
        <label className="input__check">
          <input type="checkbox" />
          <span className="input__label"></span>
        </label>
        <span className="input__span-text">
          согласие на обработку персональных данных
        </span>
      </div>
      <form>
        <button type="submit" className="input__button-submit">
          Подтвердить номер{" "}
        </button>
      </form>
    </div>
  );
};

export default Input;
