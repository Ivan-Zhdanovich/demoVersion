import { CheckboxIcon } from "../../assets/demoVersion/checkboxIcon";
import { CloseCrossIcon } from "../../assets/demoVersion/closeCrossIcon";
import { IEnterModal } from "../../types/pages/demoVersion";
import style from "./enterModal.module.scss";

export const EnterModal = ({ open, close }: IEnterModal) => {
  return (
    <dialog open={open} className={style.backgroundModal} onClick={close}>
      <div
        onClick={(e) => e.stopPropagation()}
        role="textbox"
        className={style.enterModalWrap}
      >
        <div className={style.enterModalContainer}>
          <CloseCrossIcon classNames={style.closeIcon} />
          <h1 className={style.enterModal__title}>Войти в систему</h1>
          <form onSubmit={() => {}} className={style.enterModal__form}>
            <label htmlFor="emailPhone" className={style.enterModal__form__row}>
              Email/Телефон
            </label>
            <label htmlFor="password" className={style.enterModal__form__row}>
              Пароль
            </label>
          </form>
          <div className={style.checkboxWrap}>
            <CheckboxIcon classNames={style.checkboxIcon} />
            <p className={style.checkBoxTitle}>Запомнить пароль</p>
          </div>
          <button className={style.restoreButton}>Восстановить</button>
          <div className={style.enterModal__form__buttons__wrap}>
            <input
              type="submit"
              className={style.enterModal__form__button}
              value="Войти"
            />
            <input
              type="submit"
              className={style.enterModal__form__button}
              value="Зарегистрироваться"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};
