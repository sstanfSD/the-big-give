import React from "react"
import { useFormik } from "formik"
import { FormElement, InputContainer, Input, Label, Btn } from "./FormElements"
import { useTranslation } from "gatsby-plugin-react-i18next"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: { email: "" },
  })

  return (
    <FormElement
      name="become-a-regional-champion"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.target

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...Object.fromEntries(new FormData(form)),
          }),
        })
          .then(() => {
            window.location.href = "/thank-you"
          })
          .catch(error => alert(error))
      }}
    >
      <input type="hidden" name="form-name" value="become-a-regional-champion" />

      <InputContainer>
        <Input
          placeholder="name"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        <Label htmlFor="name">{t("champion.form.name")}</Label>
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <Label htmlFor="email">{t("champion.form.email")}</Label>
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="location"
          id="location"
          name="location"
          onChange={formik.handleChange}
          value={formik.values.location}
          required
        />
        <Label htmlFor="location">{t("champion.form.location")}</Label>
      </InputContainer>

      <Btn large type="submit">{t("champion.form.submit")}</Btn>
    </FormElement>
  )
}

export default ContactForm