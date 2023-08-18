import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchAndFilter from './SearchAndFilter'; 
import { ThemeProvider } from '@rneui/themed';
import { lightTheme } from '../../../rn-elements';

describe('SearchAndFilter', () => {
  it('renders the component with search input when searchVisible is true', () => {
    const setSearch = jest.fn();
    const { getByPlaceholderText, queryByTestId } = render(
      <ThemeProvider theme={lightTheme}><SearchAndFilter searchVisible setSearch={setSearch} /></ThemeProvider>
    );

    const searchInput = getByPlaceholderText('Search');
    const filterIcon = queryByTestId('filter-icon');
    expect(searchInput).toBeTruthy();
    expect(filterIcon).toBeNull();

    fireEvent.changeText(searchInput, 'Test search');
    expect(setSearch).toHaveBeenCalledWith('Test search');
  });

  it('renders the component with filter icon when filterVisible is true', () => {
    const setIsVisible = jest.fn();
    const { getByTestId, queryByTestId } = render(
        <ThemeProvider theme={lightTheme}><SearchAndFilter filterVisible setIsVisible={setIsVisible} /></ThemeProvider>
    );

    const filterIcon = getByTestId('filter-icon');
    const searchInput = queryByTestId('input');
    expect(filterIcon).toBeTruthy();
    expect(searchInput).toBeNull();

    fireEvent.press(filterIcon);
    expect(setIsVisible).toHaveBeenCalled();
  });

  it('renders the component with both filter icon and search field', () => {
    const setIsVisible = jest.fn();
    const setSearch = jest.fn();
    const { getByTestId } = render(
        <ThemeProvider theme={lightTheme}><SearchAndFilter filterVisible setIsVisible={setIsVisible} setSearch={setSearch} searchVisible/></ThemeProvider>
    );

    const filterIcon = getByTestId('filter-icon');
    const searchInput = getByTestId('input');
    expect(filterIcon).toBeTruthy();
    expect(searchInput).toBeTruthy();

    fireEvent.press(filterIcon);
    fireEvent.changeText(searchInput,'Test search');
    expect(setIsVisible).toHaveBeenCalled();
    expect(setSearch).toHaveBeenCalledWith('Test search');
  });

  it('does not render the component when both searchVisible and filterVisible are false', () => {
    const { queryByTestId } = render(
      <SearchAndFilter searchVisible={false} filterVisible={false} />
    );

    const filterIcon = queryByTestId('filter-icon');
    const searchInput = queryByTestId('input');
    expect(filterIcon).toBeNull();
    expect(searchInput).toBeNull();
  });
});
