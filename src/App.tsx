import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./components/autocomplete";

function App() {
  return (
    <div className="App">
      <Autocomplete word="hello" />
    </div>
  );
}

export default App;
