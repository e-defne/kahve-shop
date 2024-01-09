import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            ></Route>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            ></Route>

            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App