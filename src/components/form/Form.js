import Button from 'components/button/Button';
import React, { Fragment, useEffect, useState } from 'react';

import FormInput from './FormInput';
import 'components/form/form.styles.scss';
import { updateState } from 'utils/javascript/updateState';
import { checkValidity } from 'utils/javascript/validity';

function Form(props) {
  const { formFields, buttons, headerData, onSubmit, extFormData = {} } = props;

  const [actionForm, setActionForm] = useState(formFields);
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    let extFormFields = {}
    extFormFields = JSON.parse(JSON.stringify(actionForm))
    if (extFormData && Object.keys(extFormData).length !== 0) {
        for (let i in extFormData) {
            extFormFields[i].value = extFormData[i]
        }
        setActionForm(extFormFields)
    }

  }, [extFormData]);

  const onChange = (e, inputIdentifier) => {
    e.preventDefault();

    const updatedForm = updateState(formFields, {
      [inputIdentifier]: updateState(formFields[inputIdentifier], {
        value: e.target.value,
        touched: true,
        valid: checkValidity(
          e.target.value,
          formFields[inputIdentifier].validation
        ),
      }),
    });

    let isFormValid = true;
    for (let key in updatedForm) {
      isFormValid = updatedForm[key].valid && isFormValid;
    }

    setActionForm(updatedForm)
    setIsFormValid(isFormValid)
  };

  // we receive form as an object, converting it to an array = 
  let formArray = []
  for (let i in actionForm) {
      const formElement = {
          id: i,
          config: actionForm[i]
      }
      formArray.push(formElement)
  }

  return (
    <div className='sign-in-container'>
      {headerData &&
        headerData.map((element) => {
          const { text, type } = element;
          switch (type) {
            case 'h2':
              return (
                <Fragment key={text}>
                  <h2>{text}</h2>
                </Fragment>
              );
            case 'span':
              return (
                <Fragment key={text}>
                  <span>{text}</span>
                </Fragment>
              );
            default:
              return (
                <Fragment key={text}>
                  <p>{text}</p>
                </Fragment>
              );
          }
        })}
      {formArray && (
        <form onSubmit={onSubmit}>
          {formArray.map((field) => {
            const {
                id,
                config : { touched, type, value, valid, placeholder, validation, htmlType}
            } = field;
            return (
              <Fragment key={id}>
                <FormInput
                  htmlType={htmlType}
                  type={type}
                  touched={touched}
                  invalid={!valid}
                  id={id}
                    value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  isRequired={validation.required === true}
                />
              </Fragment>
            );
          })}

          {buttons && (
            <div className='buttons-container'>
              {buttons.map((button) => {
                const { type, text, onClick } = button;
                return (
                  <Fragment key={text}>
                    <Button type={type} onClick={onClick} disabled={!isFormValid}>
                      {text}
                    </Button>
                  </Fragment>
                );
              })}
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default Form;
