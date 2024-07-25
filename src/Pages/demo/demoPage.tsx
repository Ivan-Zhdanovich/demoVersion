import { useState } from "react";

import { ArrowIcon } from "../../assets/demoVersion/arrowIcon";
import ComputerIcon from "../../assets/demoVersion/computerIcon.png";
import { EnterModal } from "../../components/enterModal/enterModal";

import style from "./demoPage.module.scss";

export const DemoPage = () => {
  const [isEnterModalShown, setIsEnterModalShown] = useState(false);

  const onTryButtonClick = () => {
    setIsEnterModalShown(true);
  };

  const closeEnterModal = () => {
    setIsEnterModalShown(false);
  };

  return (
    <div className={style.demoVersionWrap}>
      <div className={style.demoVersionContainer}>
        <EnterModal open={isEnterModalShown} close={closeEnterModal} />
        <div className={style.demoVersion__content}>
          <h1 className={style.demoVersion__content__title}>Демо-версия</h1>
          <p className={style.demoVersion__content__subtitle}>
            За 18 лет деятельности было реализовано более 500 крупных, а так же,
            не менее 2500 средних и малых проектов. Используя знания и
            накопленный опыт мы можем предложить{" "}
          </p>
          <div></div>
          <button className={style.buttonTry} onClick={onTryButtonClick}>
            <p className={style.buttonTitle}>Попробовать бесплатно</p>
            <ArrowIcon classNames={style.arrowIcon} />
          </button>
        </div>
        <img
          className={style.computerIcon1}
          src={ComputerIcon}
          alt="computer"
        />
      </div>
    </div>
  );
};
