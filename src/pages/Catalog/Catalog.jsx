import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

import Filter from "../../components/Filter/Filter";
import CamperList from "../../components/CampersList/CampersList";
import css from "./Catalog.module.css";

import { selectCampers } from "../../redux/campers/selectors";
import ButtonLoad from "../../components/ButtonLoad/ButtonLoad";

import { selectMore } from "../../redux/campers/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const more = useSelector(selectMore);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return (
    <div className={css.catalogView}>
      <Filter></Filter>
      <div>
        <CamperList campers={campers}></CamperList>
        {more && <ButtonLoad className={css.buttonLoad}></ButtonLoad>}
      </div>
    </div>
  );
}
