import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'; 
import WithHelperText from './WithHelperText'; 
import { Text } from 'react-native';

describe('WithHelperText', () => {
  it('renders with helper text', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <WithHelperText helperText="Helper Text" />
      </ThemeProvider>
    );

    const helperText = getByText('Helper Text');
    expect(helperText).toBeDefined();
  });

  it('renders with helper text as ReactNode', () => {
    const helperNode = <Text>Helper Node</Text>;

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <WithHelperText helperText={helperNode} />
      </ThemeProvider>
    );

    const helperText = getByText('Helper Node');
    expect(helperText).toBeDefined();
  });

  it('renders without helper text', () => {
    const { queryByText } = render(
      <ThemeProvider theme={lightTheme}>
        <WithHelperText />
      </ThemeProvider>
    );

    const helperText = queryByText('Helper Text');
    expect(helperText).toBeNull();
  });
  it('Tests onChangeText on user input ', ()=>{
    const mockFunc = jest.fn();
    const helperNode = <Text>Helper Node</Text>;

    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <WithHelperText helperText={helperNode} onChangeText={mockFunc}/>
      </ThemeProvider>
    );

    const input = getByTestId('input')
    fireEvent.changeText(input, 'Hello helper text');
    expect(mockFunc).toHaveBeenCalledWith('Hello helper text');
  })
});
