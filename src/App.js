import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './components/context';
import Navigation from './components/navigation';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Navigation />
          <Routes />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
