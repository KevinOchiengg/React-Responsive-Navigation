import React from 'react';

import './App.css';
import Content from './components/Content/Content';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <main>
      <Navigation />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <Content />
    </main>
  );
}

export default App;
