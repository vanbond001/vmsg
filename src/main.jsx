import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom';  // Change to HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <div>
      <App />
        <ToastContainer />
         </div>
    </HashRouter>
    {/* // </BrowserRouter>  */}
  </React.StrictMode>
  </React.StrictMode>,
)
