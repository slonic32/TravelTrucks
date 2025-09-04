import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { changeFavorite } from "../redux/campers/slice";
import Filter from "../components/Filter/Filter";
import CamperList from "../components/CampersList/CampersList";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFavorite(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return (
    <div className={css.catalogView}>
      <Filter></Filter>
      <CamperList></CamperList>
    </div>
  );
}
