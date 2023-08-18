import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SocialInteraction from "./SocialInteraction";
import { ThemeProvider } from "@rneui/themed";
import { lightTheme } from "../../../rn-elements";

describe("SocialInteraction", () => {
  it("renders the component correctly", () => {
    const handleReactions = jest.fn();
    const handleComments = jest.fn();
    const handleShare = jest.fn();

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <SocialInteraction
          handleReactions={handleReactions}
          handleComments={handleComments}
          handleShare={handleShare}
        />
      </ThemeProvider>
    );

    const reactButton = getByText("React");
    const commentButton = getByText("Comment");
    const shareButton = getByText("Share");

    expect(reactButton).toBeTruthy();
    expect(commentButton).toBeTruthy();
    expect(shareButton).toBeTruthy();
  });

  it("calls correct handlers on button press", () => {
    const handleReactions = jest.fn();
    const handleComments = jest.fn();
    const handleShare = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <SocialInteraction
          handleReactions={handleReactions}
          handleComments={handleComments}
          handleShare={handleShare}
        />
      </ThemeProvider>
    );

    const reactButton = getByText("React");
    const commentButton = getByText("Comment");
    const shareButton = getByText("Share");

    fireEvent.press(reactButton);
    fireEvent.press(commentButton);
    fireEvent.press(shareButton);

    expect(handleReactions).toHaveBeenCalledTimes(1);
    expect(handleComments).toHaveBeenCalledTimes(1);
    expect(handleShare).toHaveBeenCalledTimes(1);
  });

  it("calls correct handlers on custom socials button press", () => {
    const handleReactions = jest.fn();
    const handleComments = jest.fn();
    const handleShare = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <SocialInteraction
          handleReactions={handleReactions}
          handleComments={handleComments}
          handleShare={handleShare}
          reactions="65 Reactions"
          comments="32 Comments"
          shares="3 Shares"
        />
      </ThemeProvider>
    );

    const reactButton = getByText("65 Reactions");
    const commentButton = getByText("32 Comments");
    const shareButton = getByText("3 Shares");

    fireEvent.press(reactButton);
    fireEvent.press(commentButton);
    fireEvent.press(shareButton);

    expect(handleReactions).toHaveBeenCalledTimes(1);
    expect(handleComments).toHaveBeenCalledTimes(1);
    expect(handleShare).toHaveBeenCalledTimes(1);
  });
});
