import React from 'react';
import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";
import { render } from '@testing-library/react-native';
import TopicTitle from './TopicTitle';

describe('TopicTitle', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<ThemeProvider theme={lightTheme}><TopicTitle title="Sample Title" /></ThemeProvider>);
    const container = getByTestId('topic-title');
    const textElement = getByText('Sample Title');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
  });

  it('renders with custom color and font size', () => {
    const { getByTestId, getByText } = render(
        <ThemeProvider theme={lightTheme}><TopicTitle title="Custom Title" color="blue" fontSize={20} /></ThemeProvider>
    );
    const container = getByTestId('topic-title');
    const textElement = getByText('Custom Title');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
    expect(textElement.props.style.color).toBe('blue');
    expect(textElement.props.style.fontSize).toBe(20);
  });

  it('renders with default primary color and font size', () => {
    const { getByTestId, getByText } = render(<ThemeProvider theme={lightTheme}><TopicTitle title="Primary Title" /></ThemeProvider>);
    const container = getByTestId('topic-title');
    const textElement = getByText('Primary Title');

    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
    expect(textElement.props.style.color).toBe(lightTheme.lightColors?.primary); 
    expect(textElement.props.style.fontSize).toBe(15);
  });
});
