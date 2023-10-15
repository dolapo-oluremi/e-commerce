import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ShopContextProvder from './Context/ShopContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopContextProvder>
      <App />
    </ShopContextProvder>
  </React.StrictMode>,
)
