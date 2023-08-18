import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'; 
import TextArea from './TextArea';

describe('TextArea', () => {
  const mockFunc = jest.fn()
  it('renders with placeholder correctly', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <TextArea placeholder="Test Placeholder" setDescription={mockFunc}/>
      </ThemeProvider>
    );

    const textArea = getByPlaceholderText('Test Placeholder');
    expect(textArea).toBeDefined();
  });

  it('Calls onChangeText when a user types in the textarea', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TextArea  setDescription={mockFunc}/>
      </ThemeProvider>
    );

    const textArea = getByTestId('textarea');
    fireEvent.changeText(textArea, 'Hello, world!');
    expect(textArea.props.value).toBe('Hello, world!');
  });

  it('has correct default placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <TextArea  setDescription={mockFunc}/>
      </ThemeProvider>
    );

    const textArea = getByPlaceholderText('Enter some text here');
    expect(textArea).toBeDefined();
  });
});
