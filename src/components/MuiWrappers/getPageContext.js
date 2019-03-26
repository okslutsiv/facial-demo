import { SheetsRegistry } from "jss"
import {
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core/styles"
import { catalina, barby, lavander, electric } from "./facialColors"

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        minWidth: 120,
        fontFamily:
          "'-apple - system','BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans - serif'",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 980,
      xl: 1920,
    },
  },
  palette: {
    catalina,
    barby,
    lavander,
    electric,
    primary: {
      light: catalina[300],
      main: catalina[500],
      dark: catalina[700],
    },
    secondary: {
      light: barby[300],
      main: barby[500],
      dark: barby[700],
    },
    error: {
      light: electric[300],
      main: electric[500],
      dark: electric[700],
    },

    grey: {
      50: lavander[50],
      100: lavander[100],
      200: lavander[200],
      300: lavander[300],
      400: lavander[400],
      500: lavander[500],
      600: lavander[600],
      700: lavander[700],
      800: lavander[800],
      900: lavander[900],
      A100: lavander.A100,
      A200: lavander.A200,
      A400: lavander.A400,
      A700: lavander.A700,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily:
      "'-apple - system','BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans - serif'",
    h1: {
      fontSize: 32,
      lineHeight: 2,
      textTransform: "uppercase",
      fontWeight: 400,
      letterSpacing: 4,
    },
    h2: {
      fontSize: 28,
      lineHeight: 2,
      textTransform: "uppercase",
      fontWeight: 400,
      letterSpacing: 5,
    },
    h3: {
      fontSize: 24,
      lineHeight: 2,
      textTransform: "uppercase",
      fontWeight: 300,
      letterSpacing: 4,
    },
    h4: {
      fontSize: 20,
      lineHeight: 2,
      textTransform: "uppercase",
      fontWeight: 300,
      letterSpacing: 4,
    },

    h5: {
      fontSize: 16,
      lineHeight: 2,
      textTransform: "uppercase",
      letterSpacing: 4,
      fontWeight: 300,
    },
    body2: {
      color: "rgba(50,45,50, 0.87)",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: 1.5,
    },
    body1: {
      color: "rgba(50,45,50, 0.87)",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 1.6,
    },
  },
  shape: {
    borderRadius: 22,
  },
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
