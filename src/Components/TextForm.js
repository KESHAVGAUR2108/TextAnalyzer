import React,{useState} from 'react';

export default function TextForm(props) {

    const [text,setText] = useState("");
    document.title = 'TextEditor - Home';

    const isTextEmpty = () => {
        if(text.length === 0){
            props.showAlert('Text Box is empty !!!.','warning');
            return true;
        }
        return false;
    }

    const convertToUp = ()=>{

        if(!isTextEmpty()){
            var convertedText = text.toUpperCase();
            setText(convertedText);
            props.showAlert('Text has been converted to Upper case.','success');
        }
    }
    
    const convertToLowerCase = ()=>{

        if(!isTextEmpty()){
            var convertedText = text.toLowerCase();
            setText(convertedText);
            props.showAlert('Text has been converted to Lower case.','success');
        }
    }
    
    const convertToTitle = ()=>{

        if(!isTextEmpty()){
            var convertedText = text.toLowerCase().split(" ") ;
            
            for(var i = 0; i< convertedText.length; i++){
                if(convertedText[i] !== '')
                convertedText[i] = convertedText[i][0].toUpperCase() + convertedText[i].slice(1);
            }
            setText(convertedText.join(" "));
            props.showAlert('Text has been converted to Title Case.','success');
        }
    }

    const clearText = ()=>{setText('')}

    const onChangeHandler = (event)=>{
        var newText = event.target.value;
        setText(newText);
    }

    const removePunctuations = ()=>{

        if(!isTextEmpty()){
            var tmp = text;
            tmp = tmp.replaceAll('^','');
            tmp = tmp.replaceAll('!','');
            tmp = tmp.replaceAll('$','');
            tmp = tmp.replaceAll('#','');
        
            setText(tmp)
            props.showAlert('All the punctuations has been removed','success')
        }
    }
    
    const removeExtraSpaces = ()=>{

        if(!isTextEmpty()){
            var tempText = text.replace(/\s{2,}/g, ' ').trim() ;
            setText(tempText);
            props.showAlert('Extra spaces has been removed.','success');
        }
    }

    function numWords(){
        if(text === ""){
            return 0;
        }
        else{
            var tempText = text.replace(/\s{2,}/g, ' ').trim();
            return tempText.split(' ').length;
        }
    }

    const copy = ()=>{
        if(!isTextEmpty()){
            navigator.clipboard.writeText(text);
            props.showAlert('Text is copied to the clipboard','primary');
        }
    }   

  return (
    <div className="form-group container my-3" id='textForm'>
        <h2 style = {{color : props.mode === 'light'?'Black':'White'}}><label htmlFor="exampleFormControlTextarea1" >{props.heading}</label></h2>
        <textarea className="textArea form-control my-2" id="exampleFormControlTextarea1" rows="10"  value={text} onChange={onChangeHandler} ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={convertToUp}>Convert To UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={convertToLowerCase}>Convert To LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={convertToTitle}>Convert To TitleCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={removePunctuations}>Remove Punctuations[!^$#]</button>
        <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-3 mx-2" onClick={copy}>Copy Text</button>
        
        <h4 style =  {{color : props.mode === 'light'?'Black':'White'}}>Text Box has :: {numWords()} words and {text.length} characters</h4>
        <h4 style =  {{color : props.mode === 'light'?'Black':'White'}}>You can read this text in {numWords() * 0.008} minutes</h4>
    </div>
  );
};