import './Calculator.css';
import React,{ useState } from 'react';
import backspace from '../backspace.png';
import division from '../division.png';
import squareRoot from '../squareRoot.png';

export default function Calculator(props) {
  
  document.title = 'Calculator';

  const [expression,setExpression] = useState('0');
  
  function isTextAreaEmpty(){
    if(expression === '' || expression === '0'){
      return true;
    }
    return false;
  }

  function inputExpression(event){
    
    var value = event.target.innerText.length === 0 ? event.target.id: event.target.innerText;
    
    switch(value){

      case 'AC':{
        setExpression('0');
        break;
      }
      
      case 'Backspace':{
        var tmp = expression.slice(0,expression.length-1);
        setExpression(tmp);
        break;
      }

      default : {
        
        if(value === 'Division'){
          value = ' / ';
        }
        else if(value === 'squareRoot'){
          value = '* Math.sqrt(';
        }
        else if(value === '%'){
          value = '/100';
        }
        else if(value === '+' || value === '-'  || value === 'X' ){
          if(value === 'X'){
            value = '*';
          }

          value = ' ' + value + ' ';
        }

        if(isTextAreaEmpty()){
          setExpression(value);
        }
        else{
          setExpression(expression + value);
        }
        break;
      }
    }
  }

  function Compute(){

    let exp = expression;
    
    if(expression.includes('sqrt(')){
      exp = exp + ")";
      setExpression(exp);
    }
    setExpression(exp + ' = '+ eval(exp));
  }

  return (
        
      <div className='demo container my-5'>
        <textarea className='form-control' name="textInput" id="inputWindow" value={expression} readOnly style={{fontSize:20}}></textarea>
        <div className="myContainer container-fluid py-4">
        <div className="row">
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>AC</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' id = 'Backspace' onClick={inputExpression}><img src= {backspace} alt="backspace" id = 'Backspace' height="20"/></button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>%</button>
            </div>
            <div className="col">
              <button className="btn btn-secondary" id = 'Division' onClick={inputExpression}><img src={division} id = 'Division' alt="division" height="20" /></button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>7</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>8</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>9</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>X</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>4</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>5</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>6</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>-</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>1</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>2</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>3</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className='btn btn-secondary' id = 'squareRoot' onClick={inputExpression}><img src= {squareRoot} id = 'squareRoot' alt="sqrt" width="22px" height="20px"/></button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>0</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={inputExpression}>.</button>
            </div>
            <div className="col">
              <button className='btn btn-secondary' onClick={Compute}>=</button>
            </div>
          </div>
        </div>
      </div>  
  );
};