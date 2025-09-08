import css from "./Menu.module.css";
import icon from "../../assets/icon.svg";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className={css.menu}>
      <NavLink to="features" className={css.link}>
        Features
      </NavLink>
      <NavLink to="reviews" className={css.link}>
        Reviews
      </NavLink>
    </div>
  );
}
