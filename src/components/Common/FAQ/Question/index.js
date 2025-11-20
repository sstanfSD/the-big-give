import React, { useState } from "react"
import { QuestionElement, Answer } from "./QuestionElements"

const Question = ({ index, question, intro, answer, items }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div onClick={toggle} style={{ cursor: "pointer" }}>
      <QuestionElement
        open={open}
      >
        {index}. {question}
      </QuestionElement>

      {open && (
        <Answer
          open={open}
          style={{
            fontSize: "1.6rem",
            lineHeight: "1.7",
            marginTop: "0.5rem",
          }}
        >
          {intro && <p>{intro}</p>}
          {items?.length ? (
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              {items.map((item, i) => (
                <li key={i} style={{ marginBottom: "0.3rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : answer ? (
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          ) : null}
        </Answer>
      )}
    </div>
  )
}

export default Question