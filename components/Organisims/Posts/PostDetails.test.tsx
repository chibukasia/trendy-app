import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import {lightTheme} from '../../../rn-elements'; 
import PostDetailsComponent from './PostDetails';

describe('SwarmDetailsComponent', () => {
  it('renders swarm details card', () => {
    const { getByText, getByTestId, getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <PostDetailsComponent />
      </ThemeProvider>
    );

    const swarmTitle = getByTestId('topic-title');
    const swarmCard = getByTestId('swarm-card');
    const imageCard = getByTestId('image-card');
    const swarmContent = getAllByTestId('avatar-with-text')[0];
    const viewSwarmActivity = getByText('View Swarm Activity');
    const deleteSwarmButton = getByText('Delete Swarm');

    expect(swarmTitle).toBeTruthy();
    expect(swarmContent).toBeTruthy();
    expect(viewSwarmActivity).toBeTruthy();
    expect(deleteSwarmButton).toBeTruthy();
  });

  it('renders edit and delete buttons', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <PostDetailsComponent />
      </ThemeProvider>
    );

    const editSwarm = getByText('Edit Swarm');
    const deleteSwarm = getByText('Delete Swarm');

    expect(editSwarm).toBeTruthy();
    expect(deleteSwarm).toBeTruthy();
  });

});
