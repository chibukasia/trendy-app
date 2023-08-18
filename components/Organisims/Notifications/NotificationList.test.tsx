import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import {lightTheme} from '../../../rn-elements'; 
import NotificationsList from './NotificationsList'; 

describe('NotificationsList', () => {
  it('renders notification cards for each notification', () => {
    const { getAllByTestId,  } = render(
      <ThemeProvider theme={lightTheme}>
        <NotificationsList />
      </ThemeProvider>
    );

    const moreBtn = getAllByTestId('more-button')[0];

    expect(moreBtn).toBeTruthy();
  });

  it('displays the bottom sheet on clicking the notification', () => {
    const { getAllByTestId, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <NotificationsList />
      </ThemeProvider>
    );

    const moreBtn = getAllByTestId('more-button')[0];
    fireEvent.press(moreBtn) 

    const deleteButton = getByText('Delete notification');
    const turnOffButton = getByText('Turn off this notification type');
    const viewSettingsButton = getByText('View settings');

    expect(deleteButton).toBeTruthy();
    expect(turnOffButton).toBeTruthy();
    expect(viewSettingsButton).toBeTruthy();
  });
});
