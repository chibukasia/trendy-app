import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements'; 
import FilterCard from './FilterCard'; 

describe('FilterCard', () => {
  const filters = ['Filter 1', 'Filter 2', 'Filter 3'];
  
  it('toggles filter state onValueChange', () => {
    const onDonePressMock = jest.fn();

    const { getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <FilterCard filters={filters} onDonePress={onDonePressMock} />
      </ThemeProvider>
    );

    filters.forEach((filter, index) => {
      const switchComponent = getAllByTestId('RNE__SWITCH')[index];

      expect(switchComponent.props.value).toBe(false);
      fireEvent(switchComponent, 'onValueChange', true);

      expect(switchComponent.props.value).toBe(true);
    });
  });

  it('resets the filters',()=>{
    const onDonePressMock = jest.fn();

    const { getByText, getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <FilterCard filters={filters} onDonePress={onDonePressMock} />
      </ThemeProvider>
    );
    const switchComponent = getAllByTestId('RNE__SWITCH')
    filters.forEach((filter, index) => {

      expect(switchComponent[index].props.value).toBe(false);
      fireEvent(switchComponent[index], 'onValueChange', true);

      expect(switchComponent[index].props.value).toBe(true);
    });

    const reset = getByText('Reset');
    fireEvent.press(reset);
    expect(switchComponent[0].props.value).toBe(false);

  });

  it('calls onDonePress when Done button is pressed', () => {
    const onDonePressMock = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <FilterCard filters={filters} onDonePress={onDonePressMock} />
      </ThemeProvider>
    );

    const doneButton = getByText('Done');
    fireEvent.press(doneButton);

    expect(onDonePressMock).toHaveBeenCalledTimes(1);
  });
});
