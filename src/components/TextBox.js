import React, { useState } from 'react';
import PropTypes from 'prop-types';





export default function TextBox({ heading = "Title" }) {
    const [text, setText] = useState('Enter the Text Here')

    const handleOnClicke = () => {
        console.log('UpperCase Is clicked')
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        console.log('On Change')
        setText(event.target.value);
    }
    return (
        <div className="form-group container">
            <h3>{heading}</h3>
            {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            <button className="btn btn-primary" onClick={handleOnClicke} >UpperCase</button>
        </div>
    );
}

TextBox.propTypes = {
    title: PropTypes.string
};
