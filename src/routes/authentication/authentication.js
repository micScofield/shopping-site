import Form from 'components/form/Form';

import './authentication.styles.scss';
import { BUTTON_TYPE_CLASSES } from 'common/constants';

/*
1. State Object containing form data
reset form method
2. sign in with google ? 
3. on submit handler (calls sign in with email and password handler)
*. on input field change, sets form data
*/

const Authentication = () => {
  let headerData = [
    {
      type: 'h2',
      text: 'Already have an account?',
    },
    {
      type: 'span',
      text: 'Sign in with your email and password',
    },
  ];

  let formFields = {
    email: {
      type: 'email',
      htmlType: 'input',
      placeholder: 'Email',
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      label: 'Email',
      valid: false,
      touched: false
    },
    password: {
      type: 'password',
      htmlType: 'input',
      placeholder: 'Password',
      validation: {
        required: true,
        minLength: 6,
      },
      value: '',
      label: 'Password',
      valid: false,
      touched: false
    },
  };

  let buttons = [
    {
      type: 'submit',
      text: 'Sign In',
    },
    {
      type: 'button',
      text: 'Sign In With Google',
      buttonType: BUTTON_TYPE_CLASSES.google,
      onClick: (e) => {
        console.log('button clicked');
      },
    },
  ];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onSubmitHandler', e);
  };

  // let test = {
  //   email: 'a@a.com',
  //   password: '123456'
  // }

  return (
    <div className='authentication-container'>
      <Form
        formFields={formFields}
        buttons={buttons}
        headerData={headerData}
        onSubmit={onSubmitHandler}
        // extFormData = {test}
      />
    </div>
  );
};

export default Authentication;
