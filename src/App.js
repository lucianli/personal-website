import './styles/App.css';
import './styles/fonts.css';
import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
