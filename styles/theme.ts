import {Roboto} from 'next/font/google';
import {createTheme, responsiveFontSizes} from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);
export default theme;
