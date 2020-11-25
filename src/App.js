import './App.css';
import {useState} from "react"

import { ValidatingInputField } from './ValidatingInputField';

function App() {
  const [value, setValue] = useState("")

  function changeValue(new_value) {
    setValue(new_value)
  }
  return (
    <div>
      <ValidatingInputField label="first name" changeValue={changeValue} value={value}/>
    </div>
  );
}

export default App;
