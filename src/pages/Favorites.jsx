import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { changeFavorite } from "../redux/campers/slice";
import css from "./Favorites.module.css";

import CamperList from "../components/CampersList/CampersList";

export default function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFavorite(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return (
    <div className={css.favoriteStyle}>
      <CamperList></CamperList>
    </div>
  );
}
