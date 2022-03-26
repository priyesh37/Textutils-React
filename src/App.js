import logo from './logo.svg';
import { ReactPropTypes, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
// import React , { useState } from 'react' ;
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
          setAlert(null);
      },2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a0d7a';
      showAlert("Dark mode has Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has Enabled","success")
    }

  }
  return (
    <>
    
{/*<Navbar title="textutils2" abouttext="about textutils"/>*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <div className="container my-3">
             {/* <Switch>
                <Route path="/about">
                  <About />
                </Route>
                
                <Route path="/">

                </Route>
            </Switch> */}
             <Textform heading="Enter text to analyze below" mode={mode}/> 
              
  </div>

    </>
  );
}

export default App;
