import css from "./ButtonSearch.module.css";

export default function ButtonSearch({ className }) {
  return (
    <button type="submit" className={`${css.button} ${className || ""}`}>
      Search
    </button>
  );
}
