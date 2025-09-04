import css from "./ButtonMore.module.css";

export default function ButtonMore({ action }) {
  return (
    <button type="button" onClick={action} className={css.buttonMore}>
      Show more
    </button>
  );
}
