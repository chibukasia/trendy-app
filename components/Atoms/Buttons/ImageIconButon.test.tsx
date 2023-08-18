import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ImageIconButton from './ImageIconButon';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import '@testing-library/jest-dom/extend-expect';

describe('ImageIconButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}><ImageIconButton title="Button" name="plus" onPress={mockOnPress} /></ThemeProvider>
    );
    const button = getByTestId('image-icon-button');
    const textElement = getByText('Button');

    expect(button).toBeDefined();
    expect(textElement).toBeDefined();
  });

  it('handles press event', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}><ImageIconButton title="Button" name="plus" onPress={mockOnPress} /></ThemeProvider>
    );
    const button = getByTestId('image-icon-button');

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

});
