import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import {lightTheme} from '../../../rn-elements'; 
import AuthForm from './AuthForm'; 

describe('AuthForm', () => {
  it('renders the email input for signup', () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <AuthForm state='signup'/>
      </ThemeProvider>
    );

    const emailInput = getByPlaceholderText('Someone@example.com');
    const continueButton = getByText('Continue');
    const logInSignUpText = getByText("Already have an account? Log In");

    expect(emailInput).toBeTruthy();
    expect(continueButton).toBeTruthy();
    expect(logInSignUpText).toBeTruthy();
  });

  it('renders the email input for signin', () => {

    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <AuthForm state="login" />
      </ThemeProvider>
    );

    const emailInput = getByPlaceholderText('Someone@example.com');
    const continueButton = getByText('Continue');
    const logInSignUpText = getByText(/Don't have an account?/);

    expect(emailInput).toBeTruthy();
    expect(continueButton).toBeTruthy();
    expect(logInSignUpText).toBeTruthy();
  });

  it('captures user typed in email', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AuthForm state="signup" />
      </ThemeProvider>
    );

    const emailInput = getByTestId('input')

    fireEvent.changeText(emailInput,'someemail@gmail.com');
    expect(emailInput.props.value).toBe('someemail@gmail.com')
  });
});

it('renders social login butttons', ()=>{
    const {getByText} = render(
      <ThemeProvider theme={lightTheme}>
        <AuthForm state="signup" />
      </ThemeProvider>
    );
    const facebook = getByText('Continue With Facebook')
    const microsoft = getByText('Continue With Microsoft')
    const apple = getByText('Continue With Apple')
    const google = getByText('Continue With Google') 

    expect(facebook).toBeTruthy();
    expect(microsoft).toBeTruthy();
    expect(google).toBeTruthy();
    expect(apple).toBeTruthy();
})