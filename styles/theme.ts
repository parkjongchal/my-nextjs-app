import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 32,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 28,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 24,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 22,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 20,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: 18,
      lineHeight: '130%',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 16,
      lineHeight: '160%',
    },
    body2: {
      fontSize: 14,
      lineHeight: '160%',
    },
    caption: {
      fontSize: 12,
      lineHeight: '150%',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({theme}) => ({
          colorPrimary: {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: 40,
          disableGutters: true,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: ({theme}) => ({
          width: 200,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          paddingTop: 20,
          '& .MuiDrawer-paper': {
            drawerWidth: 200,
            width: 200,
            paddingTop: 20,
            zIndex: theme.zIndex.appBar - 1,
          },
        }),
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 60,
    },
  },
});
export default theme;
