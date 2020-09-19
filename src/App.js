import React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import BodySection from './components/BodySection/BodySection';

function App() {
  return (
    <main>
      <Navigation />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <BodySection />
    </main>
  );
}

export default App;
