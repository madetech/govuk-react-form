import ReactDOM from 'react-dom';
import testUtils from 'react-dom/test-utils';

import {ValidatingForm} from "../ValidatingForm"
import { ValidatingInputField } from '../ValidatingInputField';

describe('ValidatingForm', () => {
  let container;
  let field = {};

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it ('includes a form element', () => {
    render (<ValidatingForm />);

    expect(container.querySelector('form')).not.toBeNull();
  })

  it ('when not given anything is blank', () => {
    render (<ValidatingForm />);

    expect(container.querySelector('input')).toBeNull()
  })

  it ('accepts an array containing a field and displays it', () => {
    const fields = [
      {
        label: "First name",
        type: "input"
      }
    ]
    
    render (<ValidatingForm fields={fields}/>)

    expect(container.querySelector('input')).not.toBeNull();
    expect(container.textContent).toMatch("First name");
  })

  it ('accepts an array containing another field and displays it', () => {
    const fields = [
      {
        label: "Last name",
        type: "input"
      }
    ]
    
    render (<ValidatingForm fields={fields}/>)

    expect(container.querySelector('input')).not.toBeNull();
    expect(container.textContent).toMatch("Last name");
  })

  it.skip("displays an error message if a field's input is invalid", () => {
    const validationFunction = () => false; 
    const fields = [
      {
        label: "Last name",
        type: "input",
        validate: validationFunction,
        errorMessage: "Did not validate"
      }
    ]
    
    render (<ValidatingForm fields={fields}/>);

    const inputElement = container.querySelector("input");

    testUtils.Simulate.blur(inputElement, { target: { value: "Arbitrary value"} });
  
    expect(container.textContent).toMatch("Did not validate");
  })
})