import { createTheme } from "@rneui/themed";

// These can all be the same while designs are being worked on
const lightTheme = createTheme({
  lightColors: {
    primary: '#006773',
    background: "#fff",
    background1: "rgba(191, 187, 187, 0.08)",
    stroke:'#ADB5BD',
    stroke1: 'rgba(73, 80, 87, 0.25)',
    text: '#000',
    tint:'#006773',
    tabIconDefault:'#ccc',
    tabIconSelected:'#006773',
  },
  darkColors: {
    background: "#000",
    text: '#fff',
    stroke:'#ADB5BD',
    stroke1: 'rgba(73, 80, 87, 0.25)',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff'

  },
  mode: "light",
});

const darkTheme = createTheme({
  // lightColors: {
  //   background: "#006773",
  //   white: "#000"
  // },
  // darkColors: {
  //   background: "#006773",
  //   white: "#000"
  // },
  mode: "dark",
  
});

export { lightTheme, darkTheme };
