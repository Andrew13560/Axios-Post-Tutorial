import React, { Component } from 'react';
import './App.css';
import PersonLists from "./Components/PersonList"
import PersonInput from './Components/PersonInput'

function App() {
  return (
    <div className="App">
      <PersonInput />
      {/* Must have unique key for each item */}
      <PersonLists />
    </div>
  );
}

export default App;
