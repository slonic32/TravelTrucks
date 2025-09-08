import { useNavigate } from "react-router-dom";
import css from "./ButtonView.module.css";

export default function ButtonView({ className }) {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <button
      type="button"
      className={`${css.button} ${className || ""}`}
      onClick={goToCatalog}
    >
      View Now
    </button>
  );
}
