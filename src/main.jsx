import React from 'react'
import ReactDOM from 'react-dom/client'
// ייבוא הקומפוננטה הראשית של האפליקציה
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



//<StrictMode> lets you find common bugs in your components early during development.