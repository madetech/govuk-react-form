
const MySubmitFunction = (data) => {
  returns 
}

<ValidatingForm fields={fields} onSubmit={MySubmitFunction}


export const ValidatingForm = (props) => {
  const [valid, setValid] = useState()
  const [data, setData] = useState(initialState)
  return (
    <>
      <form>
        {
          props.fields ? <ValidatingInputField 
          data={data}
          changeData={setData}
          label={props.fields[0].label}
          validate={props.fields[0].validate}
          errorMessage={props.fields[0].errorMessage}
          validInput={setValid}
          /> : null
        }
      </form>
      <Button onSubmit={props.onSubmit(data)}>Review and confirm</Button>
    </>
  )