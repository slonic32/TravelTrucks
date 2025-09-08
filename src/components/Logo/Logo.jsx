import css from "./Logo.module.css";
import icon from "../../assets/icon.svg#logo";

export default function Logo() {
  return (
    <svg width="136" height="16" className={css.logo}>
      <use href={`${icon}#logo`}></use>
    </svg>
  );
}
