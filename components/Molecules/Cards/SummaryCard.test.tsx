import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import SummaryCard from './SummaryCard';

describe('SummaryCard', () => {
  const onPress = jest.fn();
  it('renders the component correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <SummaryCard
          imageUri="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="Test Title"
          summary="Test Summary"
          onPress={onPress}
        />
      </ThemeProvider>
    );

    const image = getByTestId('image-card');
    const title = getByText('Test Title');
    const summary = getByText('Test Summary');

    expect(image).toBeTruthy();
    expect(title).toBeTruthy();
    expect(summary).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {

    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <SummaryCard
          imageUri="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="Test Title"
          summary="Test Summary"
          onPress={onPress}
        />
      </ThemeProvider>
    );

    const card = getByTestId('summary-card');
    fireEvent.press(card);

    expect(onPress).toHaveBeenCalled();
  });
});
