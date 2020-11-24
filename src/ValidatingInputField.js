import React from 'react'
import InputField from '@govuk-react/input-field';

export const ValidatingInputField = (props) => {

    

    return (
        <div id="validatingInputField">
            <InputField
            name="lastName"
            value={props.value}
            defaultValue={props.value}
            onChange={(e) =>
              props.changeValue(e.target.value)
            }
            >
                {props.label}
            </InputField>
        </div>
    )
}