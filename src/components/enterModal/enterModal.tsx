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
          <div onClick={close}>
            <CloseCrossIcon classNames={style.closeIcon} />
          </div>
          <h1 className={style.enterModal__title}>Войти в систему</h1>
          <form onSubmit={() => {}} className={style.enterModal__form}>
            <input
              id="EmailPhone"
              type="text"
              className={style.enterModal__form__row}
              placeholder=" Email/Телефон"
            />
            <input
              id="Password"
              type="password"
              className={style.enterModal__form__row}
              placeholder="Пароль"
            />
          </form>
          <div>
            <input type="checkbox" id="checkbox" className={style.checkBox} />
            <label htmlFor="checkbox" className={style.checkBoxTitle}>
              Запомнить пароль
            </label>
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
