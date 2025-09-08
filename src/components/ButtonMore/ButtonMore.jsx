import css from "./ButtonMore.module.css";

export default function ButtonMore({ action, className }) {
  return (
    <button
      type="button"
      onClick={action}
      className={`${css.button} ${className || ""}`}
    >
      Show more
    </button>
  );
}
