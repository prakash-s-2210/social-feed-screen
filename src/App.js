import {React, useState} from 'react';
import './App.scss';
import Header from "./components/Header"
import Content from './components/Content'
function App() {

    const [isToggle,setIsToggle]= useState(false);

    const handleToggle=()=>{
      setIsToggle(!isToggle);
    }


  return (
    <div className="App">
      <Header handleToggle={handleToggle} />
      <Content isToggle={isToggle} />
    </div>
  );
}

export default App;
