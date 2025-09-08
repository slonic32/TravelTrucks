import css from "./CampersList.module.css";
import Camper from "../Camper/Camper";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/campers/selectors";

export default function CamperList({ campers }) {
  const favorites = useSelector(selectFavorite);

  return (
    <div className={css.listBlock}>
      {campers.length == 0 ? (
        <p>No campers found.</p>
      ) : (
        <ul className={css.camperList}>
          {campers.map(camper => {
            return (
              <Camper
                key={camper.id}
                camper={camper}
                favorite={favorites.some(item => item.id === camper.id)}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
