import css from "./SharedLayout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import Logo from "../Logo/Logo";

export default function SharedLayout() {
  return (
    <>
      <header className={css.header}>
        <Logo></Logo>
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
      </header>
      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
