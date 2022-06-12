// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    "50": "#E8F3FD",
    "100": "#BEDDF9",
    "200": "#94C7F5",
    "300": "#6AB1F1",
    "400": "#409BED",
    "500": "#1685E9",
    "600": "#126ABA",
    "700": "#0D508C",
    "800": "#09355D",
    "900": "#041B2F"
  }
};

// 3. extend the theme
const theme = extendTheme({ colors, config })

export default theme