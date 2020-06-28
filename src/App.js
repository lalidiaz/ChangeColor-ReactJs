import React from 'react';
import Button from './Component/Button/Button'
import './App.css';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Button />
        </header>
      </div>
    );
  }
}
 
export default App;


//We want to create an App that contain a text and a button. When we click in the button, the text should change from black to white and when we click again it change again to black.


