import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AvatarWithText from "./AvatarWithText";
import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";

describe("AvatarWithText", () => {
  const mockOnPress = jest.fn();

  it("renders correctly with abbreviation", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="JD"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");
    const abbreviationText = getByText("JD");
    const contentText = getByText("Some Content here");

    expect(container).toBeDefined();
    expect(abbreviationText).toBeDefined();
    expect(contentText).toBeDefined();
  });

  it("renders correctly with avatar", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");
    const avatarImage = getByTestId("avatar-image");

    expect(container).toBeDefined();
    expect(avatarImage).toBeDefined();
  });

  it("handles press event", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="JD"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");

    fireEvent.press(container);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("applies custom background color", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="JD"
          backgroundColor="blue"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");

    expect(container.props.style.backgroundColor).toBe("blue");
  });

  it("renders without border by default", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="JD"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");

    expect(container.props.style.borderBottomWidth).toBe(0);
  });

  it("applies border when border prop is true", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AvatarWithText
          content="Some Content here"
          abbreviation="JD"
          border
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("avatar-with-text");

    expect(container.props.style.borderBottomWidth).toBe(2);
  });
});
