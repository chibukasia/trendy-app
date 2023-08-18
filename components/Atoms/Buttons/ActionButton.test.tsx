import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ActionButton from './ActionButton';
import { ThemeProvider } from '@rneui/themed';
import '@testing-library/jest-dom/extend-expect'
import { lightTheme } from '../../../rn-elements';

describe('ActionButton', () => {
  it('renders with default props', () => {
    const { getByText, getByTestId } = render(<ThemeProvider theme={lightTheme}><ActionButton>Click me</ActionButton></ThemeProvider>);
    const button = getByText('Click me');
    expect(button).toBeDefined();
    const buttonContainer = getByTestId('button-container');
    expect(buttonContainer).toBeDefined();
  });

  it('handles button press', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ThemeProvider theme={lightTheme}><ActionButton onPress={onPressMock}>Click me</ActionButton></ThemeProvider>);
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('applies custom width and height', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><ActionButton width={200} height={50}>Click me</ActionButton></ThemeProvider>);
    const buttonContainer = getByTestId('button-container');
    expect(buttonContainer.props.style.width).toBe(200);
  });
});
