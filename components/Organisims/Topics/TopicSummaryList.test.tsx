import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "@rneui/themed";
import { lightTheme } from "../../../rn-elements";
import TopicSummaryList from "./TopicSummaryList";

describe('Tests topic summary list', ()=>{
    it('renders the topic summary list', ()=>{
        const {getAllByTestId} = render(
            <ThemeProvider theme={lightTheme}>
                <TopicSummaryList />
            </ThemeProvider>
        );
        const topics = getAllByTestId('topic-list-summary-card');
        expect(topics).toBeTruthy();

    })
})