import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'
import InputWithIcon from './InputWithIcon';

describe('InputWithIcon', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <InputWithIcon name="search" />
      </ThemeProvider>
    );
    const container = getByTestId('input-with-icon-container');
    const input = getByTestId('input');
    const icon = getByTestId('input-icon');

    expect(container).toBeDefined();
    expect(input).toBeDefined();
    expect(icon).toBeDefined();
  });

  it('calls onChangeText when input value changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <InputWithIcon name="search" onChangeText={onChangeTextMock} />
      </ThemeProvider>
    );
    const input = getByTestId('input');

    fireEvent.changeText(input, 'Hello, world!');
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello, world!');
  });
});
