import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react-native';
import IconButton from './IconButton';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import '@testing-library/jest-dom/extend-expect';

describe('IconButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}><IconButton name="add" onPress={mockOnPress} /></ThemeProvider>
    );
    const button = getByTestId('icon-button');
    const textElement = getByText('');
    expect(button).toBeDefined();
    expect(textElement).toBeDefined();
  });

  it('renders with provided title', () => {
    const { getByText } = render(
        <ThemeProvider theme={lightTheme}><IconButton name="add" onPress={mockOnPress} title='Add'/></ThemeProvider>
    );
    const textElement = getByText('Add');

    expect(textElement).toBeDefined();
  });

  it('handles press event', () => {
    const { getByTestId } = render( <ThemeProvider theme={lightTheme}><IconButton name="add" onPress={mockOnPress} /></ThemeProvider>);
    const button = getByTestId('icon-button');

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
