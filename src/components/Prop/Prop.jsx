import css from "./Prop.module.css";

export default function Prop({ propIcon, propText }) {
  return (
    <li className={css.block}>
      <svg width="20" height="20" className={css.iconProp}>
        <use href={propIcon}></use>
      </svg>

      <p className={css.textProp}>{propText}</p>
    </li>
  );
}
