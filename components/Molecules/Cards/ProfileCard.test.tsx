import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';
import ProfileCard from './ProfileCard'; 

describe('ProfileCard', () => {
  const onEdit = jest.fn();
  it('renders profile name and description', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileCard
          name="John Doe"
          description="Software Developer"
          profileUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          onEdit={onEdit}
        />
      </ThemeProvider>
    );

    const nameText = getByText('John Doe');
    const descriptionText = getByText('Software Developer');

    expect(nameText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
  });

  it('renders profile image', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileCard
          name="John Doe"
          description="Software Developer"
          profileUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          onEdit={onEdit}
        />
      </ThemeProvider>
    );

    const profileImage = getByTestId('avatar-image');

    expect(profileImage).toBeTruthy();
  });

  it('calls onEdit when "Edit" button is pressed', () => {

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ProfileCard
          name="John Doe"
          description="Software Developer"
          profileUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          onEdit={onEdit}
        />
      </ThemeProvider>
    );

    const editButton = getByText('Edit');
    fireEvent.press(editButton);

    expect(onEdit).toHaveBeenCalled();
  });
});
