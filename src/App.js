import React,{ useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Calculator from './Components/Calculator';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  function showAlert(msg,type){
    setAlert({
      message : msg,
      type : type
    })

    setTimeout(()=>{setAlert(null)},1500)
  }

  return (
    <Router>
      <Navbar title = "React App" mode = {mode} setMode = {setMode} showAlert = {showAlert}/>
      <Alert alert = {alert} />
      <Routes>
        <Route path="/" element= {<TextForm heading = "Enter the text below : " mode = {mode} setMode = {setMode} showAlert = {showAlert}/>}></Route>
        <Route path="/Calculator" element = {<Calculator />}></Route>
      </Routes>
    </Router>
  );
}

export default App;