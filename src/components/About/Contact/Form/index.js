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
  if (!values.region) {
    errors.region = "Please select your region."
  } else if (values.region === "Region") {
    errors.region = "Please select your region."
  }

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
      region: "",
      city: "",
      name: "",
      email: "",
      message: "",
    },
    validate,
  })

  console.log(
    <option selected disabled value="">
      Region
    </option>
  )
  return (
    <FormElement
      onSubmit={formik.handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input type="hidden" name="form-name" value="contact"></input>
      <InputContainer>
        <Select
          id="region"
          name="region"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.region}
          filled={formik.values.region}
        >
          <option selected disabled value="">
            Region
          </option>
          <option value="Ottawa, Ottawa Valley">Ottawa, Ottawa Valley</option>
          <option value="GTA">GTA</option>
          <option value="Quebec">Quebec</option>
          <option value="Other">Other</option>
        </Select>
        <SelectArrow src={DownArrow} alt="Select Arrow" />
        <SelectLabel htmlFor="region" filled={formik.values.region}>
          Region
        </SelectLabel>
        {formik.touched.region && formik.errors.region ? (
          <ErrorMessage>{formik.errors.region}</ErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="city"
          id="city"
          name="city"
          type="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        <Label htmlFor="city">City or Town</Label>
        {formik.touched.city && formik.errors.city ? (
          <ErrorMessage>{formik.errors.city}</ErrorMessage>
        ) : null}
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
        />
        <Label htmlFor="name">Name</Label>
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
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
        />
        <Label htmlFor="email">Email Address</Label>
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
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
        />
        <Label htmlFor="message">Your message</Label>
        {formik.touched.message && formik.errors.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}
      </InputContainer>

      <Btn large type="submit">
        Submit
      </Btn>
    </FormElement>
  )
}

export default ContactForm
