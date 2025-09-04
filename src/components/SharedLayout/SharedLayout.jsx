import css from "./SharedLayout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";

import { useDispatch } from "react-redux";

export default function SharedLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <header className={css.header}>
        <div className={css.containerH}>
          <div className={css.menu}>
            <NavLink to="/" className={css.headerLink}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={css.headerLink}>
              Catalog
            </NavLink>
            <NavLink to="/favorites" className={css.headerLink}>
              Favorite
            </NavLink>
          </div>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
