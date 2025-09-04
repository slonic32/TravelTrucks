import css from "./Filter.module.css";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Location from "../Location/Location";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Filter() {
  const dispatch = useDispatch();

  const initialValues = {
    location: "",
  };

  const contactSchema = Yup.object().shape({
    location: Yup.string().max(50, "Too Long!"),
  });

  const nameId = useId();

  function handleSubmit(values, actions) {
    dispatch(fetchCampers({ page: 1 }));
    // actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.filterBox}>
        <div className={css.locationContainer}>
          <label htmlFor={nameId} className={css.locationHeader}>
            Location
          </label>
          <Field
            type="text"
            name="location"
            id={nameId}
            className={css.locationInput}
          ></Field>
          <ErrorMessage name="location" component="span"></ErrorMessage>
        </div>
        <ButtonSearch></ButtonSearch>
      </Form>
    </Formik>
  );
}

/*  <div className={css.filterBox}>
      <Location></Location>
      <ButtonSearch></ButtonSearch>
    </div>*/
