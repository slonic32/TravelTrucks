import css from "./PropsList.module.css";
import icon from "../../assets/icon.svg";
import { nanoid } from "nanoid";
import Prop from "../Prop/Prop";

export default function PropsList({ camper }) {
  return (
    <div className={css.camperProps}>
      <ul className={css.propListUp}>
        <Prop
          key={nanoid()}
          propIcon={`${icon}#icon-adults`}
          propText={`${camper.adults} adults`}
        ></Prop>
        <Prop
          key={nanoid()}
          propIcon={`${icon}#icon-gear`}
          propText={camper.transmission}
        ></Prop>
        <Prop
          key={nanoid()}
          propIcon={`${icon}#icon-petrol`}
          propText={camper.engine}
        ></Prop>
        {camper.kitchen && (
          <Prop
            key={nanoid()}
            propIcon={`${icon}#icon-kitchen`}
            propText={"Kitchen"}
          ></Prop>
        )}
      </ul>
      <ul className={css.propListDown}>
        <Prop
          key={nanoid()}
          propIcon={`${icon}#icon-bed`}
          propText={`${camper.beds} beds`}
        ></Prop>
        {camper.airConditioner && (
          <Prop
            key={nanoid()}
            propIcon={`${icon}#icon-ac`}
            propText={"AC"}
          ></Prop>
        )}
      </ul>
    </div>
  );
}
