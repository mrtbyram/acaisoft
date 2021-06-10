import './App.css';
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
    {/* <div id="preloader">
      <div className="jumper">
        <div />
        <div />
        <div />
      </div>
    </div> */}
    <Header />
    <Welcome />
    </>
  );
}

export default App;
