import React from 'react';
import SignIn from '../../componenets/sign-in/sign-in';
import SignUp from '../../componenets/sign-up/sign-up';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
