import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Localization from './Context/Localization.jsx'
import Theme from './Context/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Localization>
    <Theme>
      <App />
    </Theme>
  </Localization>
)
