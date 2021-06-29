import React from 'react';
import './App.css';
import StoryReel from './pages/story-reel/story-reel.component.jsx'
import Header from './components/header/header.component.jsx'
import SideBar from './components/sidebar/sidebar.component';
import Feed from './pages/Feed/feed.component.jsx';
import Group from './widget/group/group.component.jsx'



function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <SideBar/>
        <div className="app__middle">
          <StoryReel/>
          <Feed/>
        </div>
        <Group/>
      </div>
     
    </div>
  );
}

export default App;
