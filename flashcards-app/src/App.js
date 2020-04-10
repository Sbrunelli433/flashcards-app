import React from 'react';
import Card from './components/card/card.component';
import Header from './components/header/header.component';
//import Collection from './components/collection/collection.component';
import './App.css';

//use App as class component
function App() {
  return (
    <div className='App'>
      <Header />
      <Card />
    </div>
  )
}


export default App;
