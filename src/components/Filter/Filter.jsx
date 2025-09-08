import css from "./Filter.module.css";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";

import icon from "../../assets/icon.svg";
import { selectLocation, selectOptions } from "../../redux/filter/selectors";
import { changeLocation, setOptions } from "../../redux/filter/slice";

import { selectType } from "../../redux/filter/selectors";
import { changeType } from "../../redux/filter/slice";

export default function Filter() {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const options = useSelector(selectOptions);

  const type = useSelector(selectType);

  const initialValues = {
    location: location || "",
    equipment: options || [],
    type: type || "",
  };
  const filterSchema = Yup.object().shape({
    location: Yup.string().max(50, "Too Long!"),
    equipment: Yup.array().of(Yup.string()),
  });

  const locationId = useId();

  const equipmentOptions = [
    { value: "AC", iconId: "icon-ac", label: "AC" },
    { value: "automatic", iconId: "icon-automatic", label: "Automatic" },
    { value: "kitchen", iconId: "icon-kitchen", label: "Kitchen" },
    { value: "TV", iconId: "icon-tv", label: "TV" },
    { value: "bathroom", iconId: "icon-bathroom", label: "Bathroom" },
  ];

  const typeOptions = [
    { value: "panelTruck", iconId: "icon-van", label: "Van" },
    {
      value: "fullyIntegrated",
      iconId: "icon-integrated",
      label: "Fully integrated",
    },
    { value: "alcove", iconId: "icon-alcove", label: "Alcove" },
  ];

  function handleSubmit(values) {
    dispatch(changeLocation(values.location || ""));
    dispatch(setOptions(values.equipment || []));
    dispatch(changeType(values.type || ""));
    dispatch(fetchCampers({ page: 1 }));
  }

  function handleCheck(values) {
    console.log(values.target.value);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={filterSchema}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.filterBox}>
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

          <p className={css.filterHeader}>Filters</p>

          <p className={css.filterGroup}>Vehicle equipment</p>
          <div className={css.filterDivider}></div>

          <div className={css.iconOptions}>
            {equipmentOptions.map(({ value, iconId, label }) => {
              const isChecked = values.equipment?.includes(value);
              return (
                <label
                  key={value}
                  className={`${css.iconLabel} ${
                    isChecked ? css.selected : ""
                  }`}
                >
                  <Field
                    type="checkbox"
                    name="equipment"
                    value={value}
                    className={css.hiddenCheckbox}
                  />
                  <svg width="24" height="24" className={css.iconSvg}>
                    <use href={`${icon}#${iconId}`}></use>
                  </svg>
                  <span className={css.iconText}>{label}</span>
                </label>
              );
            })}
          </div>

          <p className={css.filterGroup}>Vehicle type</p>
          <div className={css.filterDivider}></div>

          <div className={css.iconOptions}>
            {typeOptions.map(({ value, iconId, label }) => {
              const checked = values.type === value;
              return (
                <label
                  key={value}
                  className={`${css.iconLabel} ${checked ? css.selected : ""}`}
                >
                  <Field
                    name="type"
                    type="radio"
                    value={value}
                    checked={checked}
                    className={css.hiddenCheckbox}
                    onClick={() => {
                      // toggle: clear if already checked
                      setFieldValue("type", checked ? "" : type);
                    }}
                  ></Field>

                  <svg
                    width="24"
                    height="24"
                    className={css.iconSvg}
                    aria-hidden="true"
                  >
                    <use href={`${icon}#${iconId}`}></use>
                  </svg>
                  <span className={css.iconText}>{label}</span>
                </label>
              );
            })}
          </div>

          <ButtonSearch className={css.searchButton}></ButtonSearch>
        </Form>
      )}
    </Formik>
  );
}
