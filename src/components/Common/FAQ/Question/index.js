import React, { useState } from "react"

import { QuestionElement, Answer } from "./QuestionElements"

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div onClick={toggle}>
      <QuestionElement open={open}>{question}</QuestionElement>
      <Answer open={open} dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  )
}

export default Question
