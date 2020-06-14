import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

import { Table } from './'
// import { withRoot } from 'themes/app_theme'

const white = {
  main: 'rgba(255,255,255,1)',
  dark: '#ddd',
  medium: 'rgba(0, 0, 0, 0.08)',
  data: '#f8f8f8',
  tabs: '#FCFCFC',
  grey: '#f9f9f9'
}

const blue = {
  main: '#26bbed',
  pastel: '#7addff',
  deep: '#00A2D8',
  deepDark: '#0090D0',
  medium: '#1FB7EA',
  mediumLight: '#37CCFF'
}

const orange = {
  main: '#f5a623',
  pastel: '#ffc669',
  dark: '#f5a623'
}

const purple = {
  main: '#894ebd',
  pastel: '#ab84d0'
}

const grey = {
  main: '#9a9a9a',
  dark: '#333333',
  medium: '#999999', //"#777",
  light: '#9e9e9e'
}

const pink = {
  main: '#e75f75',
  pastel: '#ff9cac'
}

const teal = {
  main: '#2ad08e',
  pastel: '#35f0aa'
}

const red = {
  main: '#ff0000'
}

const black = {
  dark: '#000',
  dark_light: 'rgb(51,51,51)',
  main: '#212121',
  light: 'rgba(0,0,0,.12)'
}

const openSans = 'Open Sans , arial, sans-serif'
const raleway = 'Raleway , arial, sans-serif'

const fontWeight = {
  light: 400,
  main: 500,
  bold: 600,
  intense: 900
}

const lineHeight = {
  main: 1.4,
  big: 1.6
}

const letterSpacing = {
  main: '.44px',
  big: '.75px'
}

const drawerWidth = 280

const marginBigUnit = 24
const marginSmallUnit = 16

//Logo Size:
const logo = {
  sm: 34,
  md: 64,
  lg: 128
}

const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40
}

/*
Typography:

*/

const colors = {
  black: '#000',
  darkBlack: '#333',
  deepGrey: '#999',
  mediumGrey: '#CCC',
  lightGrey: '#EEE',
  whiteGrey: '#F9F9F9',
  hylyBlue: '#26bbed'
}

const margins = {
  xs: 16,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40
}

export const theme = createMuiTheme({
  shape: {
    borderRadius: 0
  },
  link: {
    pointerEvents: 'auto'
  },
  pointerEvents: {
    pointerEvents: 'auto'
  },
  onlineButton: {
    cursor: 'pointer',
    boxShadow: 'none', //0 4px 5px #eee',
    pointerEvents: 'auto'
  },
  offlineButton: {
    cursor: 'not-allowed'
  },
  secondary_nav_pos: 50,
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none'
      }
    },
    MuiListItemIcon: {
      root: {
        color: '#333'
      }
    }
  },
  containedButton: {
    boxShadow: '0px 4px 8px #EFEFEF',
    border: 'none'
  },
  notification: {
    subheader: {
      color: 'white',
      fontFamily: openSans,
      fontSize: 14,
      fontWeight: fontWeight.bold,
      margin: '0 4px',
      lineHeight: 1.2
    },
    close: {
      pointerEvent: 'all',
      padding: 0,
      margin: '1px 2px',
      cursor: 'pointer',
      color: 'white',
      fontWeight: 600
    },
    root: {
      minWidth: 350,
      maxWidth: 450,
      textAlign: 'center',
      boxShadow: '0px 4px 4px rgba(204, 204, 204, 0.25)'
    },
    success: {
      backgroundColor: '#66D184'
    },
    alert: {
      backgroundColor: '#FF5151'
    }
  },
  marginBigUnit,
  marginSmallUnit,
  select_shadow: '0 4px 5px #eee',
  google_shadow: '0 3px 2px -2px rgba(0,0,0,.1)',
  letterSpacing,
  lineHeight,
  fontWeight,
  fontSize: 16,
  inputPadding: `5px 0px`,
  inputAdornment: {
    fontWeight: fontWeight.light,
    color: grey
  },
  inputAdornmentStart: {
    marginRight: 4
  },
  inputAdornmentEnd: {
    marginLeft: 4
  },
  button: {
    fontWeight: fontWeight.main,
    pointerEvents: 'auto'
  },
  buttonShadow: 'none', //0px 4px 8px #EFEFEF',
  boxShadowContained: 'none', //"0px 4px 8px rgba(176, 190, 197, 0.24)",
  fontFamily: {
    openSans,
    raleway
  },
  margins,
  header_height: 50,
  marginBig: {
    padding: `40px ${marginBigUnit}px 0`
  },
  spacing_unit: spacing,
  palette: {
    white: '#fff',
    black: '#000',
    darkBlack: '#333',
    deepGrey: '#999',
    mediumGrey: '#CCC',
    lightGrey: '#EEE',
    whiteGrey: '#F9F9F9',
    hylyBlue: '#26bbed',
    deepBlue: '#0094C6',
    greenTeal: '#66D184',
    red: '#FF5151',
    errorRed: '#FF0000',
    orange: '#FF9900',
    divider: '#EEE',
    hoverColor: '#f5f5f5',
    background: {
      paper: '#f9f9f9',
      default: white.main
    },
    default: {
      main: white.main
    },
    primary: {
      main: '#EEE',
      contrastText: white.main
    },
    secondary: {
      main: grey.dark,
      contrastText: white.main
    },
    action: {
      active: grey.medium,
      /*
       * this property is important.
       * It makes the hover on selected properties in select elements have a
       * transparent background
       */
      selected: 'transparent'
    },
    text: {
      secondary: grey.main,
      primary: grey.dark
    },
    hint: {
      main: blue.main
    },
    disabled: grey.medium,
    error: {
      main: '#FF0000'
    }
  },
  typography: {
    fontFamily: openSans,
    h1: {
      fontFamily: raleway,
      fontSize: 32
    },
    h2: {
      fontFamily: raleway,
      fontSize: 28
    },
    h3: {
      fontFamily: raleway,
      fontSize: 24
    },
    h4: {
      fontFamily: raleway,
      fontSize: 20
    },
    h5: {
      fontFamily: raleway,
      fontSize: 18
    },
    subtitle1: {
      fontFamily: openSans,
      fontSize: 12
    },
    subtitle2: {
      fontFamily: openSans
    },
    body1: {
      fontSize: 16,
      fontFamily: openSans
    },
    body2: {
      fontSize: 14,
      fontFamily: openSans
    },
    h6: {
      fontSize: 16,
      padding: 0,
      margin: 0,
      fontFamily: raleway
    },
    useNextVariants: true
  },
  icon: {
    size: 20
  },
  drawerWidth,
  userMenu: {
    width: drawerWidth
  },
  navigationButton: {
    textTransform: 'uppercase',
    fontSize: 14,
    cursor: 'pointer',
    pointerEvents: 'auto'
  },
  listItemNotFirst: {
    padding: `8px 0px`,
    pointerEvents: 'auto'
  },
  listItem: {
    fontSise: 16,
    lineHeight: 1.6,
    padding: `5px 0px`
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export const SearchableTable = withRoot(Table)
