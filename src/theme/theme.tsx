import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
};

// Sample
const fonts = {
  // heading: "Arial, sans-serif",
  // body: "Roboto, sans-serif",
};

const components = {
  /* Sample
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
  },*/
};

export const initialColorModeConfiguration: "dark" | "light" = "dark";

export const CustomTheme = extendTheme({
  colors,
  fonts,
  components,
});
