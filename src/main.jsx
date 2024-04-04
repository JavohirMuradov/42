import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './Context/Theme.jsx'
import i18n from './i18n/i18n.js'; // Import the i18n configuration
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Theme>
)
