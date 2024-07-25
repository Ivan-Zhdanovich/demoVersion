import { Link } from "react-router-dom";
import style from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <span>
        <Link className={style.navigationLink} to="/">
          Home
        </Link>
        <Link className={style.navigationLink} to="/about">
          About
        </Link>
      </span>
    </nav>
  );
};
