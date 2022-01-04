import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./countries.json";
import Autocomplete from "./components/autocomplete";

function App() {
  return (
    <div className="App">
      <Autocomplete data={data} />
    </div>
  );
}

export default App;
