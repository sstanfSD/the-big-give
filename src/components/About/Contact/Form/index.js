import React from "react"
import { useFormik } from "formik"
import {
  FormElement,
  InputContainer,
  Input,
  SelectLabel,
  Select,
  SelectArrow,
  Label,
  ErrorMessage,
  TextArea,
  Btn,
} from "./FormElements"

import DownArrow from "../../../../assets/icons/down-arrow.svg"

const validate = values => {
  const errors = {}

  if (!values.city) {
    errors.city = "Please include your city."
  }

  if (!values.name) {
    errors.name = "Please include your name."
  }

  if (!values.email) {
    errors.email = "Please include your email address."
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.message) {
    errors.message = "Please include your message."
  }

  return errors
}

const ContactForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      city: "",
      name: "",
      email: "",
      message: "",
    },
    validate,
  })

  return (
    <FormElement
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input type="hidden" name="form-name" value="contact"></input>

      <InputContainer>
        <Input
          placeholder="city"
          id="city"
          name="city"
          type="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          required
        />
        <Label htmlFor="city">City or Town</Label>
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="name"
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
        />
        <Label htmlFor="name">Name</Label>
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        <Label htmlFor="email">Email Address</Label>
      </InputContainer>

      <InputContainer>
        <TextArea
          placeholder="message"
          id="message"
          name="message"
          type="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows="5"
          required
        />
        <Label htmlFor="message">Your message</Label>
      </InputContainer>

      {/* {formik.errors.message || formik.values.region === "" ? (
        <Btn large type="submit" disabled>
          Submit
        </Btn>
      ) : ( */}
      <Btn large type="submit">
        Submit
      </Btn>
      {/* )} */}
    </FormElement>
  )
}

export default ContactForm
