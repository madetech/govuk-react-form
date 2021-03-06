import { useState } from 'react'
import Button from '@govuk-react/button'

import { ValidatingInputField } from "./ValidatingInputField"

export const ValidatingForm = (props) => {
  const [valid, setValid] = useState()
  const data = {}
  
  const onSubmit = () => {
    props.onSubmit(data)
  }

  return (
    <>
      <form id="validatingForm" onSubmit={onSubmit}>
        {
          props.fields ? <ValidatingInputField 
          label={props.fields[0].label}
          validate={props.fields[0].validate}
          errorMessage={props.fields[0].errorMessage}
          validInput={setValid}
          /> : null
        }
      </form>
      <Button onClick={onSubmit} form="validatingForm" type="submit">Review and confirm</Button>
    </>
  )
}
