import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'; 
import ToggleField from './ToggleField'; 

describe('ToggleField', () => {
  const mockFunc = jest.fn()
  it('renders with title', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ToggleField title="Toggle Title" onCheck={mockFunc}/>
      </ThemeProvider>
    );

    const title = getByText('Toggle Title');
    expect(title).toBeDefined();
  });

  it('renders without title', () => {
    const { queryByText } = render(
      <ThemeProvider theme={lightTheme}>
        <ToggleField onCheck={mockFunc}/>
      </ThemeProvider>
    );

    const title = queryByText('Toggle Title');
    expect(title).toBeNull();
  });

  it('toggles switch state on press', () => {
    const onCheckMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ToggleField title="Toggle Title" onCheck={onCheckMock} />
      </ThemeProvider>
    );

    const switchComponent = getByTestId('toggle-switch'); 
    expect(switchComponent.props.value).toBe(false);
    fireEvent(switchComponent, 'onValueChange', true);
    expect(switchComponent.props.value).toBe(true);
  });
});
