import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import Comment from './Comment'; 

describe('Comment', () => {
  it('renders the component correctly', () => {
    const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
    const content = 'Sample content';

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Comment avatar={avatar} content={content} />
      </ThemeProvider>
    );

    const likeButton = getByText('Like');
    const replyButton = getByText('Reply');
    const comment = getByText('Sample content');

    expect(likeButton).toBeTruthy();
    expect(replyButton).toBeTruthy();
    expect(comment).toBeTruthy();
    expect(getByTestId('avatar-image')).toBeTruthy()
  });


  it('Shows ChatInput component on reply press', () => {
    const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
    const content = 'Sample content';

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Comment avatar={avatar} content={content} />
      </ThemeProvider>
    );

    const reply = getByText('Reply');
    fireEvent.press(reply)

    expect(screen.getByTestId('chat-input-container')).toBeTruthy()
  });
});
