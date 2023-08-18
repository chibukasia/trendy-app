import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import PostDetailsCard from './PostDetailsCard'; 
import dayjs from 'dayjs';

describe('SwarmDetailsCard', () => {
  it('renders the component correctly', () => {
    const updateTopicStats = jest.fn();

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <PostDetailsCard
          updateTopicStats={updateTopicStats}
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s"
          title="Test Title"
          content="Test Content"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          author="Test Author"
          date={dayjs('2023-08-07T10:30:00').toDate()}
        />
      </ThemeProvider>
    );

    const title = getByText('Test Title');
    const content = getByText('Test Content');
    const author = getByText('Created By: Test Author');
    const date = getByText('07/08/2023');
    const time = getByText('10:30');

    expect(title).toBeTruthy();
    expect(content).toBeTruthy();
    expect(author).toBeTruthy();
    expect(date).toBeTruthy();
    expect(time).toBeTruthy();
  });

  it('calls updateTopicStats on interaction press', () => {
    const updateTopicStats = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <PostDetailsCard
          updateTopicStats={updateTopicStats}
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s"
          title="Test Title"
          content="Test Content"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          author="Test Author"
          date={dayjs('2023-08-07T10:30:00').toDate()}
        />
      </ThemeProvider>
    );

    const reactButton = getByText('React');
    const commentButton = getByText('Comment');
    const shareButton = getByText('Share');

    fireEvent.press(reactButton);
    fireEvent.press(commentButton);
    fireEvent.press(shareButton);

    expect(updateTopicStats).toHaveBeenCalledTimes(3);
  });
});
