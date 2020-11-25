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

  it('renders an input element', () => {
    const label = "last name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.querySelector('input')).not.toBeNull();
  })

  it('renders the label - first name', () => {
    const label = "first name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.textContent).toMatch("first name");
  })

  it('renders the label - last name', () => {
    const label = "last name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.textContent).toMatch("last name");
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
    let validInput = true
    const changeValue = (new_value) => {
      value = new_value
    }

    const mustNotContainNumbers = (value) => {
      return !/\d/.test(value)
    }

    const changeValidInput = (new_value) => {
      validInput = new_value
    }
    
    render(<ValidatingInputField 
      label={label} 
      value={value} 
      changeValue={changeValue} 
      validate={mustNotContainNumbers} 
      errorMessage={errorMessage}
      validInput={changeValidInput}
    />);
    
    const inputElement = container.querySelector('input');
    
    TestUtils.Simulate.blur(inputElement, { target: { value: invalidInputString } });
    expect(container.textContent).toContain(errorMessage)
  })

  it('sends an invalid flag when input contains number', () => {
    const label = "Last name";
    const invalidInputString = "thisShouldNotHaveANumberInIt_1"
    const errorMessage = "Last name should not include numbers"
    let value = ""
    let validInput = true

    const mustNotContainNumbers = (value) => {
      return !/\d/.test(value)
    }
    
    const changeValidInput = (new_value) => {
      validInput = new_value
    }

    const changeValue = (new_value) => {
      value = new_value
    }
    render(<ValidatingInputField 
      label={label} 
      value={value} 
      changeValue={changeValue} 
      validate={mustNotContainNumbers} 
      errorMessage={errorMessage}
      validInput={changeValidInput}
    />);

    const inputElement = container.querySelector('input');
    
    TestUtils.Simulate.blur(inputElement, { target: { value: invalidInputString } });
    expect(validInput).toBeFalsy

  })
})
