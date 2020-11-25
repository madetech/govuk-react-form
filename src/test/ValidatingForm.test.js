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
    render (<ValidatingForm onSubmit={() => null}/>);

    expect(container.querySelector('form')).not.toBeNull();
  })

  it ('when not given anything is blank', () => {
    render (<ValidatingForm onSubmit={() => null}/>);

    expect(container.querySelector('input')).toBeNull()
  })

  it ('accepts an array containing a field and displays it', () => {
    const fields = [
      {
        label: "First name",
        type: "input"
      }
    ]
    
    render (<ValidatingForm fields={fields} onSubmit={() => null}/>);

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
    
    render (<ValidatingForm fields={fields} onSubmit={() => null}/>);

    expect(container.querySelector('input')).not.toBeNull();
    expect(container.textContent).toMatch("Last name");
  })

  it("displays an error message if a field's input is invalid", () => {
    const validationFunction = () => false; 
    const fields = [
      {
        label: "Last name",
        type: "input",
        validate: validationFunction,
        errorMessage: "Did not validate"
      }
    ]


    render (<ValidatingForm fields={fields} onSubmit={() => ()=>null}/>);

    const inputElement = container.querySelector("input");

    testUtils.Simulate.blur(inputElement, { target: { value: "Arbitrary value"} });
  
    expect(container.textContent).toMatch("Did not validate");
  })

  it ("contains a review and confirm button" , () => {
    render (<ValidatingForm onSubmit={() => null}/>);

    expect(container.querySelector('button')).not.toBeNull();
    expect(container.querySelector('button').textContent).toMatch("Review and confirm");
  })

  it ("calls a function when the button is clicked" ,() => {
    const callback = jest.fn(x => x);

    render (<ValidatingForm onSubmit={callback}/>);

    const button = container.querySelector('button')

    testUtils.Simulate.click(button)

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0][0]).toEqual({})
  })
})