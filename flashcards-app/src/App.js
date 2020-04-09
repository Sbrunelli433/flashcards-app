import React from 'react';
import Card from './components/card/card.component';
import Header from './components/header/header.component';
import './App.css';

//convert to class component
class App extends React.Component {
  constructor(){
    super();

    this.state={
     collection: []
     
    };
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Card/>
      </div>
    );
  }
}


export default App;
