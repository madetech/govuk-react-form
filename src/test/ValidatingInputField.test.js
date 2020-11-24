import ReactDOM from 'react-dom';

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

  it('renders the label', () => {
    const label = "first name";
    render(<ValidatingInputField label={label}/>);
    
    expect(container.querySelector('#validatingInputField').textContent).toMatch("first name");
  })
})
