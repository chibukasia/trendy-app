import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Divider from './Divider';
import { ThemeProvider } from '@rneui/themed';
import '@testing-library/jest-dom/extend-expect'
import { lightTheme } from '../../../rn-elements';


describe('Divider', () => {
  it('renders without children', () => {
    const { getByTestId, queryByText } = render(<ThemeProvider theme={lightTheme}><Divider /></ThemeProvider>);
    const container = getByTestId('divider-container');
    const dividerElements = queryByText('Or');
    
    expect(container).toBeDefined();
    expect(dividerElements).toBeNull();
  });

  it('renders with children', () => {
    const { getByTestId, getByText } = render(<ThemeProvider theme={lightTheme}><Divider children='Or'/></ThemeProvider>);
    const container = getByTestId('divider-container');
    const textElement = getByText('Or');
    
    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
  });

  it('applies custom background color', () => {
    const { getAllByTestId } = render(<ThemeProvider theme={lightTheme}><Divider children='Or' backgroundColor='blue'/></ThemeProvider>);
    const divider = getAllByTestId('divider')[0];
    
    expect(divider.props.style.backgroundColor).toBe('blue');
  });

  it('uses default stroke color for text and divider', () => {
    const { getByTestId, getAllByTestId } = render(<ThemeProvider theme={lightTheme}><Divider children='Or'/></ThemeProvider>);
    const textElement = getByTestId('text');
    const divider = getAllByTestId('divider')[0];
    
    expect(textElement.props.style.color).toBe(lightTheme.lightColors?.stroke); 
    expect(divider.props.style.backgroundColor).toBe(lightTheme.lightColors?.stroke); 
  });
});
