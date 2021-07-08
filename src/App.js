import React from 'react';
import Header from './components/Header.jsx';
import LateralBar from './components/LateralBar.jsx';
import Menu from './components/Menu.jsx'
import './app.css'


const App = () => {
  return (
<div className= 'first'>
  <Header />
  <div className="mainContainer">
  <LateralBar />
  <Menu />
  </div>

</div>
  );
}

export default App;
