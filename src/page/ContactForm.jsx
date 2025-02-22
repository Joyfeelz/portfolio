import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"; // For form validation

const ContactForm = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name cannot be longer than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-4xl bg-[#060606]   my-10 shadow-lg mx-auto p-4  rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold ">
              Full Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border bg-[#060606]  rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold ">
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border bg-[#060606]  rounded-md"
            />

            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold ">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="mt-1 p-2 w-full border bg-[#060606]  rounded-md h-32"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
