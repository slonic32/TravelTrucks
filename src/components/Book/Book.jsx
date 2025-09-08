import css from "./Book.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ButtonSend from "../ButtonSend/ButtonSend";

export default function Book() {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const filterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.date().required("Date is required"),
    comment: Yup.string().max(500, "Too long!"),
  });

  function handleSubmit(values) {
    console.log("Submitted:", values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={filterSchema}
    >
      <Form className={css.block}>
        <h3 className={css.bookHeader}>Book your campervan now</h3>
        <p className={css.bookP}>
          Stay connected! We are always ready to help you.
        </p>

        <div className={css.locationContainer}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={css.name}
          />
          <ErrorMessage name="name" component="span" />

          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
          />
          <ErrorMessage name="email" component="span" />

          <Field
            name="date"
            className={css.input}
            placeholder="Booking date*"
            type="text"
            onFocus={e => (e.target.type = "date")}
            onBlur={e => (e.target.type = "text")}
          />

          <ErrorMessage name="date" component="span" />

          <Field
            as="textarea"
            name="comment"
            rows={4}
            placeholder="Comment"
            className={css.textarea}
          />
          <ErrorMessage name="comment" component="span" />
        </div>

        <ButtonSend className={css.sendButton} />
      </Form>
    </Formik>
  );
}
