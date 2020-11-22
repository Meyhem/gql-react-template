import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import { App } from './app'

import './lib/lib.css'
import { GlobalStyle, theme } from './theme'
import { client } from './client'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <App />
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
