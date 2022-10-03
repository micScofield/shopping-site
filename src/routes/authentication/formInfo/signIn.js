import { BUTTON_TYPE_CLASSES } from 'common/constants';
export let signInFormHeaderData = [
  {
    type: 'h2',
    text: 'Already have an account?',
  },
  {
    type: 'span',
    text: 'Sign in with your email and password',
  },
];

export let signInFormFields = {
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
    touched: false,
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
    touched: false,
  },
};

export let signInFormButtons = [
  {
    type: 'submit',
    text: 'Sign In',
  },
  {
    type: 'button',
    text: 'Sign In With Google',
    secondaryButtonClass: BUTTON_TYPE_CLASSES.google,
    onClick: (e) => {e.preventDefault()}, // to be set inside Authentication route component
  },
];
