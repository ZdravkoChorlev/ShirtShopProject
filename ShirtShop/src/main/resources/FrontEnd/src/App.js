import React from 'react';
import './App.css';
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
    </div>
  );
}

export default App;
