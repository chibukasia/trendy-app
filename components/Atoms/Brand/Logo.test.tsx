import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from './Logo';

describe('Logo', () => {
  it('renders with default width and height', () => {
    const { getByTestId } = render(<Logo />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.width).toBe(100);
    expect(logoImage.props.style.height).toBe(100);
  });

  it('renders with custom width and height', () => {
    const { getByTestId } = render(<Logo width={200} height={150} />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.width).toBe(200);
    expect(logoImage.props.style.height).toBe(150);
  });

  it('renders with aspect ratio preserved', () => {
    const { getByTestId } = render(<Logo />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.aspectRatio).toBeCloseTo(1, 5); 
  });

  it('applies custom width and preserves aspect ratio', () => {
    const { getByTestId } = render(<Logo width={300} />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.width).toBe(300);
    expect(logoImage.props.style.aspectRatio).toBeCloseTo(1, 5);
  });

  it('applies custom height and preserves aspect ratio', () => {
    const { getByTestId } = render(<Logo height={120} />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.height).toBe(120);
    expect(logoImage.props.style.aspectRatio).toBeCloseTo(1, 5);
  });

  it('applies custom width and height', () => {
    const { getByTestId } = render(<Logo width={200} height={200} />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeDefined();
    expect(logoImage.props.style.width).toBe(200);
    expect(logoImage.props.style.height).toBe(200);
  });
});
