import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'
import ChatInput from './ChatInput';

describe('ChatInput', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ChatInput avatarUrl="avatar-url" onSendMessage={jest.fn()} />
      </ThemeProvider>
    );
    const container = getByTestId('chat-input-container');
    const avatar = getByTestId('avatar');
    const input = getByTestId('input');
    const sendButton = getByTestId('send-button');

    expect(container).toBeDefined();
    expect(avatar).toBeDefined();
    expect(input).toBeDefined();
    expect(sendButton).toBeDefined();
  });

  it('calls onSendMessage when send button is pressed', () => {
    const onSendMessageMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ChatInput avatarUrl="avatar-url" onSendMessage={onSendMessageMock} />
      </ThemeProvider>
    );
    const input = getByTestId('input');
    const sendButton = getByTestId('send-button');

    fireEvent.changeText(input, 'Hello, world!');
    fireEvent.press(sendButton);

    expect(onSendMessageMock).toHaveBeenCalledWith('Hello, world!');
  });
});
