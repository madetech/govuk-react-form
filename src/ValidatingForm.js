import { useState } from 'react'

import { ValidatingInputField } from "./ValidatingInputField"

export const ValidatingForm = (props) => {
  const [valid, setValid] = useState()

  return (
    <form>
      {
        props.fields ? <ValidatingInputField 
        label={props.fields[0].label}
        validate={props.fields[0].validate}
        errorMessage={props.fields[0].errorMessage}
        validInput={setValid}
        /> : null
      }
    </form>
  )
}