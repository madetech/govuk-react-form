import { ValidatingInputField } from "./ValidatingInputField"

export const ValidatingForm = (props) => {
  return (
    <form>
      {
        props.fields ? <ValidatingInputField label={props.fields[0].label}/> : null
      }
    </form>
  )
}