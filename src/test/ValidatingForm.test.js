import ReactDOM from 'react-dom';

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


  it ('accepts an array containing fields and displays them', () => {
    
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

})