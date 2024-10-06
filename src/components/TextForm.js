import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase." , "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase." , "success");
    }

    const handleClClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        setText("");
        props.showAlert("Text has been cleared." , "success");
    }

    const HandleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard" , "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed." , "success");
    }

    const [text, setText] = useState('');
    
    function countWords(str) {
        const wordsArray = str.trim().split(/\s+/);    
        if (wordsArray[0] === "") {
          return 0;
        }
        return wordsArray.length;
    }

  return (
    <>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClClick}>Clear text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h3>Your text summary</h3>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{0.008 * countWords(text)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
