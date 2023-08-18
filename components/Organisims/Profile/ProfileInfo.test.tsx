import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import {lightTheme} from '../../../rn-elements'; 
import ProfileInfo from './ProfileInfo'; 

describe('ProfileInfo', () => {
  it('renders user profile information', () => {
    const { getByText, getByTestId, getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileInfo />
      </ThemeProvider>
    );

    const profileCard = getByTestId('avatar-image');
    const primaryLinks = getAllByTestId('primary-links');
    const notifcation = getByText('Notifications');
    
    expect(profileCard).toBeTruthy();
    expect(primaryLinks.length).toBe(4);
    expect(notifcation).toBeTruthy();
  });

  it('renders primary navigation links', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileInfo />
      </ThemeProvider>
    );

    const achievementsLink = getByText('Achievements');
    const historyLink = getByText('History And Statistics');
    const accountsLink = getByText('Accounts and Login');
    const settingsLink = getByText('Settings');

    expect(achievementsLink).toBeTruthy();
    expect(historyLink).toBeTruthy();
    expect(accountsLink).toBeTruthy();
    expect(settingsLink).toBeTruthy();
  });

  it('renders secondary navigation links', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileInfo />
      </ThemeProvider>
    );

    const privacyLink = getByText('Privacy And Security');
    const supportLink = getByText('Support');
    const aboutLink = getByText('About');

    expect(privacyLink).toBeTruthy();
    expect(supportLink).toBeTruthy();
    expect(aboutLink).toBeTruthy();
  });

  it('checks for the Edit button', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileInfo />
      </ThemeProvider>
    );

    const editButton = getByText('Edit');
    expect(editButton).toBeTruthy()
  });

  it('checks for Logout button', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileInfo />
      </ThemeProvider>
    );

    const logoutButton = getByText('Logout');
    expect(logoutButton).toBeTruthy();

  });
});
