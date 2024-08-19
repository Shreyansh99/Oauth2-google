import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter } from "react-router-dom"
import { AuthContext, AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>  
    </BrowserRouter>
)