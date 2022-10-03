import { useContext } from 'react';

import Form from 'components/form/Form';
import './authentication.styles.scss';
import { BUTTON_TYPE_CLASSES } from 'common/constants';
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from 'utils/firebase/firebase.utils';

import {
  signInFormButtons,
  signInFormHeaderData,
  signInFormFields,
} from 'routes/authentication/formInfo/signIn';
import {
  signUpFormButtons,
  signUpFormFields,
  signUpFormHeaderData,
} from 'routes/authentication/formInfo/signUp';
import { UserContext } from 'contexts/user.context';

const Authentication = () => {
  const { setCurrentUser } = useContext(UserContext);

  const onSignInSubmitHandler = async (e, payload, resetFormFields) => {
    e.preventDefault();
    console.log('onSubmitHandler', payload, resetFormFields);
    const { email, password } = payload;
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      // resetFormFields();

      // set the user in context
      setCurrentUser(user)
    } catch (error) {
      console.log(error.code.split('/')[1]);
    }
  };

  const onSignUpSubmitHandler = async (e, payload, resetFormFields) => {
    e.preventDefault();
    console.log('onSignUpSubmitHandler', payload);

    const { email, password, displayName, confirmPassword } = payload;

    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

      // set the user in context
      setCurrentUser(user)
    } catch (error) {
      console.log(error.code.split('/')[1]);
    }
  };

  // let test = {
  //   email: 'a@a.com',
  //   password: '123456'
  // }

  return (
    <div className='authentication-container'>
      <Form
        formFields={signInFormFields}
        buttons={signInFormButtons}
        buttonTypeClasses={BUTTON_TYPE_CLASSES}
        headerData={signInFormHeaderData}
        onSubmit={onSignInSubmitHandler}
        // extFormData = {test}
      />

      <Form
        formFields={signUpFormFields}
        buttons={signUpFormButtons}
        buttonTypeClasses={BUTTON_TYPE_CLASSES}
        headerData={signUpFormHeaderData}
        onSubmit={onSignUpSubmitHandler}
        // extFormData = {test}
      />
    </div>
  );
};

export default Authentication;
