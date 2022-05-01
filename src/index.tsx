import React from 'react'
import ReactDOM from 'react-dom/client'
import './STYLES/index.scss'
import App from './App'
import { AppContextProvider } from './Store/Context'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
)
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
)
