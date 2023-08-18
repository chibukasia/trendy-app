import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";
import { render, fireEvent } from "@testing-library/react-native";
import React from 'react';
import BaseInput from './BaseInput';

describe('BaseInput', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><BaseInput /></ThemeProvider>);
    const container = getByTestId('base-input-container');

    expect(container).toBeDefined();
  });

  it('renders with fullWidth', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><BaseInput fullWidth/></ThemeProvider>);
    const container = getByTestId('RNE__Input__view-wrapper');

    expect(container).toBeDefined();
    expect(container.props.style.width).toBe('100%');
  });

  it('renders with custom placeholder', () => {
    const { getByPlaceholderText } = render(<ThemeProvider theme={lightTheme}><BaseInput placeholder="Custom Placeholder"/></ThemeProvider>);
    const placeholder = getByPlaceholderText('Custom Placeholder');

    expect(placeholder).toBeDefined();
  });
  it('Calls onChangeText when user types in', () => {
    const mockChange = jest.fn()
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><BaseInput onChangeText={mockChange}/></ThemeProvider>);
    const input = getByTestId('base-input-container');

    fireEvent.changeText(input, 'Hello, world!');
    expect(mockChange).toBeCalled();
  });

});
