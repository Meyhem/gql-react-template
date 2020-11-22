import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    info: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',

    text: '#343a40',
  },
  fontSizes: {
    tiny: '.2rem',
    small: '.5rem',
    normal: '1rem',
    big: '2rem',
    mega: '5rem',
  },
  breakpoints: {
    xs: 1,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`
