import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import { createGlobalStyle } from 'styled-components'

const container = document.getElementById('root')
const root = createRoot(container)

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
