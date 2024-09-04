"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TypeInitialValues, TypeLoginFormFields } from "@/assets/ts/login";
import ErrorForm from "./ErrorForm/ErrorForm";
import "./form.scss";
import Button from "../Button/Button";

type FormFieldsProps = {
  initialValues: TypeInitialValues;
  formFields: TypeLoginFormFields;
};

const FormFields = ({ initialValues, formFields }: FormFieldsProps) => {
  const [error, setError] = useState("");

  const handleSubmit = (values: TypeInitialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, values, setFieldValue }) => (
        <Form className="form-container">
          {formFields.map((form, index) => {
            return (
              <div key={index} className="input-container">
                <label htmlFor={form.name}>{form.header}</label>
                <Field
                  type={form.type}
                  placeholder={form.placeholder}
                  name={form.name}
                  id={form.name}
                  autoComplete="true"
                />
                <ErrorForm error={error} errors={errors[form.name]} />
              </div>
            );
          })}
          <Button title="Se connecter" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default FormFields;