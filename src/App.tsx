import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'
import { NextUIProvider } from "@nextui-org/react"
import { darkTheme } from "./themes"

import { AutocompleteWrapper } from "./components/ui"


import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';


const App: React.FunctionComponent = () => {
  return (
    <>
    <NextUIProvider theme={darkTheme}>
			<AutocompleteWrapper />
		</NextUIProvider>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
