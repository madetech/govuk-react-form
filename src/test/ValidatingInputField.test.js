import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import {useState} from 'react'

import { ValidatingInputField } from '../ValidatingInputField';

describe('ValidatingInputField', () => {
  let container;
  let field = {};

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders an input field', () => {
    render(<ValidatingInputField />);
    
    expect(container.querySelector('#validatingInputField')).not.toBeNull();
  })

  it('renders the label - first name', () => {
    const label = "first name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.querySelector('#validatingInputField').textContent).toMatch("first name");
  })

  it('renders the label - last name', () => {
    const label = "last name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.querySelector('#validatingInputField').textContent).toMatch("last name");
  })

  it('renders an input element', () => {
    const label = "last name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.querySelector('input')).not.toBeNull();
  })

  it('stores user input in state', () => {
    const label = "last name";
    let value = ""
    function changeValue(new_value) {
      value = new_value
    }

    render(<ValidatingInputField label={label} value={value} changeValue={changeValue}/>);

    const inputElement = container.querySelector('input');
    expect(value).toEqual('');
    TestUtils.Simulate.change(inputElement, { target: { value: 'Smith' } });
    expect(value).toEqual('Smith');
  })

  it('validates using the passed function', () => {
    const label = "Last name";
    const invalidInputString = "thisShouldNotHaveANumberInIt_1"
    const errorMessage = "Last name should not include numbers"
    let value = ""
    const changeValue = (new_value) => {
      value = new_value
    }

    const mustNotContainNumbers = (value) => {
      return !/\d/.test(value)
    }
    
    render(<ValidatingInputField 
      label={label} 
      value={value} 
      changeValue={changeValue} 
      validate={mustNotContainNumbers} 
      errorMessage={errorMessage}
    />);
    
    const validatingInputField = container.querySelector('#validatingInputField')
    const inputElement = container.querySelector('input');
    
    TestUtils.Simulate.blur(inputElement, { target: { value: invalidInputString } });
    expect(validatingInputField.textContent).toContain(errorMessage)
  })
})
