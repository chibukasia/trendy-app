import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import TopicCard from './TopicCard';

describe('TopicCard', () => {
  it('renders the component correctly', () => {
    const updateTopicStats = jest.fn();
    const comments = [
      { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 1' },
      { id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 2' },
    ];
    const supporters = [
      { id: 1, name: 'Supporter 1', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
      { id: 2, name: 'Supporter 2', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
    ];

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicCard
          title="Test Title"
          summary="Test Summary"
          comments={comments}
          supporters={supporters}
          views={10}
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          duration="Now"
          updateTopicStats={updateTopicStats}
        />
      </ThemeProvider>
    );

    const title = getByText('Test Title');
    const summary = getByText('Test Summary');
    const seeCommentsButton = getByText('See All 2 comments');
    const supportersButton = getByText('Supporters');
    const views = getByText('10 Views');

    expect(title).toBeTruthy();
    expect(summary).toBeTruthy();
    expect(seeCommentsButton).toBeTruthy();
    expect(supportersButton).toBeTruthy();
    expect(views).toBeTruthy();
  });

  it('calls updateTopicStats on interaction press', () => {
    const updateTopicStats = jest.fn();
    const comments = [
      { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 1' },
      { id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 2' },
    ];
    const supporters = [
      { id: 1, name: 'Supporter 1', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
      { id: 2, name: 'Supporter 2', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
    ];

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicCard
          title="Test Title"
          summary="Test Summary"
          comments={comments}
          supporters={supporters}
          views={10}
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          duration="Now"
          updateTopicStats={updateTopicStats}
        />
      </ThemeProvider>
    );

    const reactButton = getByText('React');
    const commentButton = getByText('Comment');
    const shareButton = getByText('Share');
    const seeCommentsButton = getByText('See All 2 comments');
    const supportersButton = getByText('Supporters');

    fireEvent.press(reactButton);
    fireEvent.press(commentButton);
    fireEvent.press(shareButton);
    fireEvent.press(seeCommentsButton);
    fireEvent.press(supportersButton);

    expect(updateTopicStats).toHaveBeenCalledTimes(3);
  });

  it('sets the comments visible on see comments press', () => {
    const updateTopicStats = jest.fn();
    const comments = [
      { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 1' },
      { id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 2' },
    ];
    const supporters = [
      { id: 1, name: 'Supporter 1', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
      { id: 2, name: 'Supporter 2', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
    ];

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicCard
          title="Test Title"
          summary="Test Summary"
          comments={comments}
          supporters={supporters}
          views={10}
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          duration="Now"
          updateTopicStats={updateTopicStats}
        />
      </ThemeProvider>
    );

    const seeCommentsButton = getByText('See All 2 comments');

    fireEvent.press(seeCommentsButton);

    expect(getByText('Comment 1')).toBeTruthy();
  });

  it('sets the supporters visible on supporters press', () => {
    const updateTopicStats = jest.fn();
    const comments = [
      { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 1' },
      { id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s', content: 'Comment 2' },
    ];
    const supporters = [
      { id: 1, name: 'Supporter 1', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
      { id: 2, name: 'Supporter 2', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
    ];

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicCard
          title="Test Title"
          summary="Test Summary"
          comments={comments}
          supporters={supporters}
          views={10}
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          duration="Now"
          updateTopicStats={updateTopicStats}
        />
      </ThemeProvider>
    );
    const supportersButton = getByText('Supporters');

    fireEvent.press(supportersButton);

    expect(getByText('Supporter 1')).toBeTruthy();
  });
});
