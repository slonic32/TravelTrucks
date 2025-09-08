import css from "./CamperPage.module.css";
import { Outlet, useParams } from "react-router-dom";

import { Suspense, useEffect, useState } from "react";

import { fetchDetails } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import Menu from "../../components/Menu/Menu";
import Book from "../../components/Book/Book";
import { lazy } from "react";

const CamperDetails = lazy(() =>
  import("../../components/CamperDetails/CamperDetails")
);

export default function CamperPage() {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails({ camperId }));
  }, [dispatch, camperId]);

  return (
    <div className={css.container}>
      <CamperDetails></CamperDetails>
      <Menu></Menu>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1312"
        height="2"
        viewBox="0 0 1312 2"
        fill="none"
        className={css.divider}
      >
        <path d="M0 1H1312" stroke="#DADDE1" />
      </svg>

      <div className={css.block}>
        <div className={css.leftBlock}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>

        <Book />
      </div>
    </div>
  );
}
