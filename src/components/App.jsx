import { lazy } from "react";

import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/selectors.js";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites.jsx"));
import SharedLayout from "./SharedLayout/SharedLayout";
const CamperPage = lazy(() => import("../pages/CamperPage/CamperPage.jsx"));
const Features = lazy(() => import("./Features/Features.jsx"));
const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalog/:camperId" element={<CamperPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
