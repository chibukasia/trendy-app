import { ThemeProvider } from "@rneui/themed";
import "@testing-library/jest-dom/extend-expect";
import { lightTheme } from "../../../rn-elements";
import { render } from "@testing-library/react-native";
import React from "react";
import ImageCard from "./ImageCard";

describe("ImageCard", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ImageCard imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      </ThemeProvider>
    );
    const container = getByTestId("image-card");
    const image = getByTestId("image");

    expect(container).toBeDefined();
    expect(image).toBeDefined();
  });

  it("renders with custom height and width", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ImageCard
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          width={200}
          height={300}
        />
      </ThemeProvider>
    );
    const container = getByTestId("image-card");
    const image = getByTestId("image");

    expect(container).toBeDefined();
    expect(image).toBeDefined();
    expect(image.props.style.width).toBe(200);
    expect(image.props.style.height).toBe(300);
  });

  it("renders with custom border radius", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ImageCard
          imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          borderRadius={10}
        />
      </ThemeProvider>
    );
    const container = getByTestId("image-card");
    const image = getByTestId("image");

    expect(container).toBeDefined();
    expect(image).toBeDefined();
    expect(image.props.style.borderRadius).toBe(10);
  });

  it("renders with default height and width if not provided", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <ImageCard imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      </ThemeProvider>
    );
    const container = getByTestId("image-card");
    const image = getByTestId("image");

    expect(container).toBeDefined();
    expect(image).toBeDefined();
    expect(image.props.style.width).toBe("100%");
    expect(image.props.style.height).toBe(160);
  });
});
