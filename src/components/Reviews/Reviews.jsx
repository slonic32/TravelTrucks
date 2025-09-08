import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectCamper } from "../../redux/campers/selectors";

export default function Reviews() {
  const camper = useSelector(selectCamper);
  if (!camper || Object.keys(camper).length === 0) return null;
  return <p>review</p>;
}
