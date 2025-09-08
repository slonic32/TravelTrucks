import css from "./Book.module.css";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";

import icon from "../../assets/icon.svg";

export default function Book() {
  const initialValues = {
    location: "",
  };
  const filterSchema = Yup.object().shape({
    location: Yup.string().max(50, "Too Long!"),
  });

  const locationId = useId();

  function handleSubmit(values) {}

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={filterSchema}
    >
      <Form className={css.box}>
        <div className={css.locationContainer}>
          <label htmlFor={locationId} className={css.locationHeader}>
            Location
          </label>
          <div className={css.locationWrapper}>
            <svg width="20" height="20" className={css.icon}>
              <use href={`${icon}#icon-location`}></use>
            </svg>

            <Field
              type="text"
              name="location"
              id={locationId}
              className={css.locationInput}
            ></Field>
          </div>

          <ErrorMessage name="location" component="span"></ErrorMessage>
        </div>

        <ButtonSearch className={css.searchButton}></ButtonSearch>
      </Form>
    </Formik>
  );
}
