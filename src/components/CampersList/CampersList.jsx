import css from "./CampersList.module.css";
import Camper from "../Camper/Camper";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import ButtonLoad from "../ButtonLoad/ButtonLoad";

import { selectMore } from "../../redux/campers/selectors";

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const more = useSelector(selectMore);
  return (
    <div>
      <ul className={css.camperList}>
        {campers.map(camper => {
          return <Camper key={camper.id} camper={camper} />;
        })}
      </ul>
      {more && <ButtonLoad></ButtonLoad>}
    </div>
  );
}
