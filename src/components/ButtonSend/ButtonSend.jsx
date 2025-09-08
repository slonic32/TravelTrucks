import css from "./ButtonSend.module.css";

export default function ButtonSend({ className }) {
  return (
    <button type="submit" className={`${css.button} ${className || ""}`}>
      Send
    </button>
  );
}
