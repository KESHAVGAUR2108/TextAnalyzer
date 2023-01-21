import React,{ useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function Navbar({mode,setMode,title,showAlert}) {

  const [dropdown,setDropdown] = useState('hide');

  const switchToggle = (event)=>{

    var eventSource = event.target.id;
    
    if(eventSource === 'blueMode'){
      setMode('dark');
      $('textArea').css({backgroundColor:'lightGray',color:'Blue'});
      $('.btn').css({backgroundColor:'#012d95'});
      document.body.style.backgroundColor = '#0a0a31';
      showAlert('Blue mode has been enabled.','success');
    }
    else if(eventSource === 'lightMode'){
      setMode('light');
      $('textArea').css({backgroundColor : 'White',color:'Black'});
      $('.btn').css({backgroundColor:'#0a58ca'});
      document.body.style.backgroundColor = 'White';
      showAlert('Light mode has been enabled.','success');
    }
    else if(eventSource === 'GreenMode'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e380e';
      $('textArea').css({backgroundColor : 'lightGray' ,color:'green'});
      $('.btn').css({backgroundColor:'Green'});
      showAlert('Green mode has been enabled.','success');
    }
    else if(eventSource === 'RedMode'){
      setMode('dark');
      $('textArea').css({backgroundColor : 'lightGray' ,color:'#360202'});
      $('.btn').css({backgroundColor:'#360202'});
      document.body.style.backgroundColor = '#360202';
      showAlert('Red mode has been enabled.','success');
    }
  };

  function help() {
    if(dropdown === 'show'){
      $('#myDropdown').hide();
      setDropdown('hide');
    }
    else{
      $('#myDropdown').show();
      setDropdown('show');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="navbar-brand" style={{fontSize:'26px',cursor:'grab'}}>{title}</div>
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse"  id="navbarSupportedContent">
    <ul id='#myDropdown' className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Text Editor</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Calculator ">Calculator</Link>
      </li>
      <li onClick={help} className="nav-item dropdown keepopen">
        <p className="abcd nav-link dropdown-toggle" role="button" data-bs-toggle='dropdown'  aria-expanded='false'>
          Themes
        </p>
        <div id = 'myDropdown' onClick={switchToggle} className="dropdown-menu" >
          <div className="form-check">
            <input className="form-check-input" defaultChecked type="radio" name="exampleRadios" id="lightMode" value="option1"/>
              <label className="form-check-label">
                Light
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="blueMode" value="option2" />
              <label className="form-check-label" htmlFor="blueSwitch">
                Blue
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="GreenMode" value="option3"/>
            <label className="form-check-label">
              Green
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="RedMode" value="option3"/>
            <label className="form-check-label">
              Brown
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>
  );
};

Navbar.defaultProps = {
  title : "Write title here"
};