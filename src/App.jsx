import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'; 

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div id='top'></div>
        <Header />
        <main className='column'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
