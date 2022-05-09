import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SolarSystem planets={ planets } />
        <Missions />
      </div>
    );
  }
}

export default App;
