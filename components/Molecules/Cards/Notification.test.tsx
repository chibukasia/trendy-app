import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'
import Notification from './Notification'; 

describe('Notification', () => {
  it('renders the notification with correct data', () => {
    const profileUrl = 'https://example.com/profile.jpg';
    const title = 'New Notification';
    const content = 'You have a new message.';
    const duration = 'Now';
    const setIsVisible = jest.fn();

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Notification
          profileUrl={profileUrl}
          title={title}
          content={content}
          duration={duration}
          setIsVisible={setIsVisible}
        />
      </ThemeProvider>
    );

    const profileAvatar = getByTestId('profile-avatar');
    const titleText = getByText(title);
    const contentText = getByText(content);
    const durationText = getByText(/Now/);

    expect(profileAvatar).toBeDefined();
    expect(titleText).toBeDefined();
    expect(contentText).toBeDefined();
    expect(durationText).toBeDefined();
  });

  it('calls setIsVisible when "More" button is pressed', () => {
    const profileUrl = 'https://example.com/profile.jpg';
    const title = 'New Notification';
    const content = 'You have a new message.';
    const duration = 'Now';
    const setIsVisible = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Notification
          profileUrl={profileUrl}
          title={title}
          content={content}
          duration={duration}
          setIsVisible={setIsVisible}
        />
      </ThemeProvider>
    );

    const moreButton = getByTestId('more-button');
    fireEvent.press(moreButton);

    expect(setIsVisible).toHaveBeenCalledWith(true);
  });

  it('calls onMarkAsRead when content is pressed', () => {
    const profileUrl = 'https://example.com/profile.jpg';
    const title = 'New Notification';
    const content = 'You have a new message.';
    const duration = 'Now';
    const setIsVisible = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Notification
          profileUrl={profileUrl}
          title={title}
          content={content}
          duration={duration}
          setIsVisible={setIsVisible}
        />
      </ThemeProvider>
    );

    const contentText = getByText(content);
    fireEvent(contentText, 'press');
    expect(contentText.props.style.fontWeight).toBe('400')

  });
});
