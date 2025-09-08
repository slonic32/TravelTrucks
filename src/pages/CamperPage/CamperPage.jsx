import css from "./CamperPage.module.css";
import { Outlet, useParams } from "react-router-dom";

import { Suspense, useEffect, useState } from "react";

import { fetchDetails } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

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

  const camper = useSelector(selectCamper);

  return (
    <>
      <CamperDetails camper={camper}></CamperDetails>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
