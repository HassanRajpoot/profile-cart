import {createThemes} from 'tw-colors';
import colors from "tailwindcss/colors";

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple","pink"
];
const shadeMapping = {
  "150": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "150",
}
const generateThemeObject = (
  colors, mapping, invert = false
)=>{
  const theme = {};
  baseColors.forEach((color)=>{
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value])=>{
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
}
const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);
const themes = {
  light: {
    ...lightTheme, 
    white: '#ffffff'
  },
  darkTheme: {
    ...darkTheme, 
    white: colors.gray["950"],
    black: colors.gray["800"]
  }
}
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
