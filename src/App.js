import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem planets={ planets } />
      </div>
    );
  }
}

export default App;
