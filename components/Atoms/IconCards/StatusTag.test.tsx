import React from 'react';
import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";
import { render } from '@testing-library/react-native';
import StatusTag from './StatusTag';

describe('StatusTag', () => {
  it('renders correctly with "Completed" status', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><StatusTag status="Completed" /></ThemeProvider>);
    const container = getByTestId('status-tag');
    const textElement = getByTestId('status-text');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
    expect(textElement.props.style.color).toBe('#38B000');
  });

  it('renders correctly with "Cancelled" status', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><StatusTag status="Cancelled" /></ThemeProvider>);
    const container = getByTestId('status-tag');
    const textElement = getByTestId('status-text');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
    expect(textElement.props.style.color).toBe('#BF0603');
  });

  it('renders correctly with "In Progress" status', () => {
    const { getByTestId } = render(<ThemeProvider theme={lightTheme}><StatusTag status="In Progress" /></ThemeProvider>);
    const container = getByTestId('status-tag');
    const textElement = getByTestId('status-text');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
    expect(textElement.props.style.color).toBe('#1877F2');
  });
});
