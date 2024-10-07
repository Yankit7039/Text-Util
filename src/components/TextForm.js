import React, { useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.", "success");
    };

    const handleClClick = () => {
        setText("");
        props.showAlert("Text has been cleared.", "success");
    };

    const HandleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed.", "success");
    };

    const [text, setText] = useState('');

    const countWords = (str) => {
        const wordsArray = str.trim().split(/\s+/);
        if (wordsArray[0] === "") {
            return 0;
        }
        return wordsArray.length;
    };

    const renderTooltip = (message) => (
        <Tooltip>{message}</Tooltip>
    );

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-4">
                    <textarea
                        className="form-control"
                        value={text}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
                            color: props.mode === 'light' ? 'black' : 'white',
                            border: '2px solid #ced4da',
                            borderRadius: '5px',
                            padding: '15px'
                        }}
                        onChange={HandleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <div className="button-group d-flex justify-content-between flex-wrap">
                    <OverlayTrigger placement="top" overlay={renderTooltip(text.length === 0 ? 'Enter text to enable' : '')}>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Uppercase</button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip(text.length === 0 ? 'Enter text to enable' : '')}>
                        <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleLoClick}>Lowercase</button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip(text.length === 0 ? 'Enter text to enable' : '')}>
                        <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1' onClick={handleClClick}>Clear</button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip(text.length === 0 ? 'Enter text to enable' : '')}>
                        <button disabled={text.length === 0} className='btn btn-info mx-1 my-1' onClick={handleCopy}>Copy</button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip(text.length === 0 ? 'Enter text to enable' : '')}>
                        <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={handleExtraSpaces}>Remove Spaces</button>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="card p-3" style={{ backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#495057', borderRadius: '8px' }}>
                    <h3 className='card-title'>Your text summary</h3>
                    <p>{countWords(text)} words and {text.length} characters</p>
                    <p>{0.008 * countWords(text)} Minutes to read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                </div>
            </div>
        </>
    );
}
