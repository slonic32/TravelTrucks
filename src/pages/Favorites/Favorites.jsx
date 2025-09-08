import css from "./Favorites.module.css";

import CamperList from "../../components/CampersList/CampersList";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/campers/selectors";

export default function Favorites() {
  const campers = useSelector(selectFavorite);

  return (
    <div className={css.favoriteStyle}>
      <CamperList campers={campers}></CamperList>
    </div>
  );
}
