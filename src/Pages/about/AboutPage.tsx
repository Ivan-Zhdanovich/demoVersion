import style from "./aboutPage.module.scss";

export const AboutPage = () => {
  return (
    <div className={style.aboutPageContainer}>
      <h1 className={style.aboutPageTitle}>Тестовое задание.</h1>
      <p>Сделал Жданович Иван за 35 часов.</p>
    </div>
  );
};
