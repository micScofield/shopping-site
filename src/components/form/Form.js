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

    let formArray = []
    let extFormFields = []

  useEffect(() => {
    // destructure extFormData and try to fill in the ""values"" for form fields here.
    /*
    { email: 'test', password: '123456' }
    */
    extFormFields = JSON.parse(JSON.stringify(actionForm))

    for (let i in extFormData) {
        extFormArray.find(el => el.id === i).config.value = extFormData[i]
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

    console.log(updatedForm)

    setActionForm(updatedForm)
    setIsFormValid(isFormValid)
  };

  // we receive form as an object, converting it to an array = 
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
            console.log(field)
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
