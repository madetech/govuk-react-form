import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
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

  it('saves existing input value when submitted', async () => {
    expect.hasAssertions();

    render(<ValidatingInputField onChange={() => expect(firstName).toEqual('Ashley')} />)

    await ReactTestUtils.Simulate.change(input('customer'));
  })
})
