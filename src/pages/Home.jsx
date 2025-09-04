import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={css.header}>
        Explore the broadest range of campers to suit every preference!
      </h1>
      <img src="/home.jpg" alt="campers" className={css.banner} />
    </>
  );
}
