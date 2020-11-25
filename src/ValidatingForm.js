import { ValidatingInputField } from "./ValidatingInputField"

export const ValidatingForm = (props) => {
  

  return (
    <form>
      {props.fields ? <ValidatingInputField label="First name" /> : null}
    </form>
  )
}