import React from 'react'
import './App.css';
import Drop from "./drag_drop/Drop";

function App() {
  return (
        <div>
        <p className="title">Upload image</p>
        <div className="content">
        <Drop/>

        </div>
    </div>

  );
}

export default App;
