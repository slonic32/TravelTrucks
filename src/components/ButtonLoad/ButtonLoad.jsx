import css from "./ButtonLoad.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { changePage } from "../../redux/campers/slice";
import { selectPage } from "../../redux/campers/selectors";

export default function ButtonLoad({ className }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const handleclick = () => {
    dispatch(fetchCampers({ page: currentPage + 1 }));
    dispatch(changePage(currentPage + 1));
  };
  return (
    <button
      type="button"
      onClick={handleclick}
      className={`${css.button} ${className || ""}`}
    >
      Load more
    </button>
  );
}
