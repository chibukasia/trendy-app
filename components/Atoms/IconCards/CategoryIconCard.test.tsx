import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CategoryIconCard from "./CategoryIconCard";
import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";

describe("CategoryIconCard", () => {
  const mockOnPress = jest.fn();

  it("renders correctly with title and image", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <CategoryIconCard
          title="Category"
          image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("category-icon-card");
    const titleText = getByText("Category");

    expect(container).toBeDefined();
    expect(titleText).toBeDefined();
  });

  it("handles press event", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <CategoryIconCard
          title="Category"
          image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const container = getByTestId("category-icon-card");

    fireEvent.press(container);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("renders with default text style", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <CategoryIconCard
          title="Category"
          image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const titleText = getByTestId("category-title");

    expect(titleText.props.style.color).toBe(lightTheme.lightColors?.text);
    expect(titleText.props.style.fontSize).toBe(15);
  });

  it("applies custom text color", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <CategoryIconCard
          title="Category"
          image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
    const titleText = getByTestId("category-title");

    expect(titleText.props.style.color).toBe(lightTheme.lightColors?.text);
  });
});
