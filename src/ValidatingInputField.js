import React, { useState } from 'react'
import InputField from '@govuk-react/input-field';

export const ValidatingInputField = (props) => {
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);

    return (
        <div id="validatingInputField">
            <InputField
            name="lastName"
            value={props.value}
            input={ 
                {defaultValue: props.value}
            }
            onChange={(e) =>
              props.changeValue(e.target.value)
            }
            onBlur={(e) => {
                setTouched(true);
                setValid(props.validate(e.target.value));
            }}
            meta={{touched: touched, error: valid ? null : props.errorMessage }}
            >
                {props.label}
            </InputField>
        </div>
    )
}