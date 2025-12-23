import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {

  // REGEX
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // form state
  const [form, setForm] = useState({});

  // handleChange
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  // handleValidate
  const handleValidate = () => {
    const errors = {};

    // name
    if (!form.name) {
      errors.name = "Required";
    }

    // email
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }

    // phone
    if (!form.phone) {
      errors.phone = "Required";
    }

    return errors;
  };

  // handleSubmit
  const handleSubmit = () => {
    alert("Add contact successfully!!!");
  };

  return (
    <div className="container">
      <h2>Contact form</h2>

      <Formik
  initialValues={form}
  validate={handleValidate}
  onSubmit={handleSubmit}
>
  {({ errors, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <label>Name</label>
      <input
        name="name"
        onChange={handleChange}
        value={form.name || ""}
        className={errors.name ? "error-input" : ""}
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      {/* Email */}
      <label>Email</label>
      <input
        name="email"
        onChange={handleChange}
        value={form.email || ""}
        className={errors.email ? "error-input" : ""}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      {/* Phone */}
      <label>Phone</label>
      <input
        name="phone"
        onChange={handleChange}
        value={form.phone || ""}
        className={errors.phone ? "error-input" : ""}
      />
      {errors.phone && <p className="error-text">{errors.phone}</p>}

      {/* Message */}
      <label>Message</label>
      <textarea
        name="message"
        onChange={handleChange}
        value={form.message || ""}
      />

      <button type="submit">Submit</button>
    </form>
  )}
</Formik>

    </div>
  );
}

export default App;
