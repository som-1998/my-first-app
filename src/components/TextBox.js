import React, { useState } from 'react';
import PropTypes from 'prop-types';



export default function TextBox({ heading = "Title" }) {
    const [text, setText] = useState('Enter the Text Here')

    const handleUpClicke = () => {
        // console.log('handleUpClicke Is clicked')
        setText(text.toUpperCase())
    }
    const handleLoClicke = () => {
        // console.log('handleLoClicke Is clicked')
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
    }
    const handleClear = (event) => {
        // console.log('handleClear has clicked')
        setText('');
    }

    function noOfWords(val) {
        if (val.length === 0) return 0;
        else return val.trim().split(/\s+/).length;
    }


    //   It is targetted by the button 'speak':
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }
    );
    const [modeBtnText, setModeBtnText] = useState('Dark Mode');


    const convertMode = (myStyle) => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setModeBtnText('Light Mode');
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
        }
    };


    return (
        <>
            <div className="form-group container">
                <h3>{heading}</h3>
                {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleUpClicke} >Upper Case</button>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleLoClicke} >Lower Case</button>
                <button className="btn btn-primary  my-2 mx-1" onClick={handleClear} >Clear</button>
                <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-2">Speak</button>
            </div>
            <div className="container my-2">
                <h3>Text Analysis</h3>
                <p>Your text has {noOfWords(text)} words and {text.length} characters. </p>
            </div>
            <div className="container" style={myStyle}>
                <h3>Preview</h3>
                {text}
                <br />
                <button type="submit" onClick={convertMode} className="btn btn-primary mx-1 my-2">{modeBtnText}</button>
            </div>

        </>
    );
}

TextBox.propTypes = {
    title: PropTypes.string
};
