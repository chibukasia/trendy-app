import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';
import TopicSummaryListCard from './TopicsSummaryListCard'; 
import { lightTheme } from '../../../rn-elements'; 

describe('TopicSummaryListCard', () => {
  const mockTitle = 'Topic Title';
  const mockData = [
    {
      title: 'Summary Title 1',
      imageUrl: 'image_url_1',
      summary: 'Summary 1',
    },
    {
      title: 'Summary Title 2',
      imageUrl: 'image_url_2',
      summary: 'Summary 2',
    },
  ];

  it('renders component correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicSummaryListCard title={mockTitle} data={mockData} />
      </ThemeProvider>
    );

    const titleElement = getByText(mockTitle);
    const seeAllElement = getByText('See All');
    expect(titleElement).toBeTruthy();
    expect(seeAllElement).toBeTruthy();
  });

  it('renders summary cards correctly', () => {
    const { getByText, getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TopicSummaryListCard title={mockTitle} data={mockData} />
      </ThemeProvider>
    );
    
    const summaryCards = getAllByTestId('summary-card')[0]
      const summaryCardTitle = getByText('Summary Title 1');
      const summaryCardSummary = getByText('Summary 1');
      expect(summaryCardTitle).toBeTruthy();
      expect(summaryCardSummary).toBeTruthy();
    
  });

});
