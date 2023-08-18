import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SocialInteractionButton from './SocialInteractionButton';
import { ThemeProvider } from '@rneui/themed';
import '@testing-library/jest-dom/extend-expect'
import { lightTheme } from '../../../rn-elements';

describe('SocialInteractionButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}><SocialInteractionButton title="Like" name="thumbs-up" onPress={mockOnPress} /></ThemeProvider>
    );
    const button = getByTestId('social-interaction-button');
    const textElement = getByText('Like');

    expect(button).toBeDefined();
    expect(textElement).toBeDefined();
  });

  it('handles press event', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={lightTheme}><SocialInteractionButton title="Like" name="thumbs-up" onPress={mockOnPress} /></ThemeProvider>
    );
    const button = getByTestId('social-interaction-button');

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
