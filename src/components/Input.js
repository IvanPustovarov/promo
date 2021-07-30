import React from "react";
import "../styles/input.scss";

const Input = () => {
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <div className="input__delete">
        <div className="input__backspace">стереть</div>
        <div className="input__zero">0</div>
      </div>
      <div className="input__agreement">
        <label className="input__check">
          <input type="checkbox" />
          <span className="input__label"></span>
        </label>
        <span className="input__span-text">согласие на обработку персональных данных</span>
      </div>
      <form>
        <button type="submit" className="input__button-submit">Подтвердить номер </button>
      </form>
    </div>
  );
};

export default Input;
