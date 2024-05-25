import React, { useState } from 'react';
import PropTypes from 'prop-types';



export default function TextBox({ heading = "Title" }) {
    const [text, setText] = useState('Enter the Text Here')

    const handleUpClicke = () => {
        // console.log('UpperCase Is clicked')
        setText(text.toUpperCase())
    }
    const handleLoClicke = () => {
        // console.log('UpperCase Is clicked')
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
    }
    const handleClear = (event) => {
        // console.log('On Change')
        setText('');
    }

    function noOfWords(val) {
        if (val.length === 0) return 0;
        else return val.trim().split(/\s+/).length;
    }


    return (
        <>
            <div className="form-group container">
                <h3>{heading}</h3>
                {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleUpClicke} >Upper Case</button>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleLoClicke} >Lower Case</button>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleClear} >Clear</button>
            </div>
            <div className="container my-2">
                <h3>Text Analysis</h3>
                <p>Your text has {noOfWords(text)} words and {text.length} characters. </p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                {text}
            </div>
        </>
    );
}

TextBox.propTypes = {
    title: PropTypes.string
};
