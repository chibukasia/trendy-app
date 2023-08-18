import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'
import NotificationActions from './NotificationActions';

describe('NotificationActions', () => {
    const onDeleteNotification = jest.fn();
    const onNotificationTurnOff = jest.fn();
    const onViewSettingPress = jest.fn();
  it('calls onDeleteNotification when "Delete notification" button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <NotificationActions
          onDeleteNotification={onDeleteNotification}
          onNotificationTurnOff={onNotificationTurnOff}
          onViewSettingPress={onViewSettingPress}
        />
      </ThemeProvider>
    );

    const deleteButton = getByText('Delete notification');
    fireEvent.press(deleteButton);

    expect(onDeleteNotification).toHaveBeenCalled();
  });

  it('calls onNotificationTurnOff when "Turn off this notification type" button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <NotificationActions
          onDeleteNotification={onDeleteNotification}
          onNotificationTurnOff={onNotificationTurnOff}
          onViewSettingPress={onViewSettingPress}
        />
      </ThemeProvider>
    );

    const turnOffButton = getByText('Turn off this notification type');
    fireEvent.press(turnOffButton);

    expect(onNotificationTurnOff).toHaveBeenCalled();
  });

  it('calls onViewSettingPress when "View settings" button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <NotificationActions
          onDeleteNotification={onDeleteNotification}
          onNotificationTurnOff={onNotificationTurnOff}
          onViewSettingPress={onViewSettingPress}
        />
      </ThemeProvider>
    );

    const viewSettingsButton = getByText('View settings');
    fireEvent.press(viewSettingsButton);

    expect(onViewSettingPress).toHaveBeenCalled();
  });
});
