import React from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
import SideBar from './components/sidebar/sidebar.component';
import Feed from './pages/Feed/feed.component.jsx';



function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <SideBar/>
        <Feed/>
        
      </div>
     
    </div>
  );
}

export default App;
