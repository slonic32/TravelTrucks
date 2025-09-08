import ButtonView from "../../components/ButtonView/ButtonView";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.home}>
      <div className={css.container}>
        <h1 className={css.header}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <ButtonView className={css.button}></ButtonView>
      </div>
    </div>
  );
}
