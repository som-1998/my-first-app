import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextBox({ heading = "Title" }) {
    const [text, setText] = useState('Enter the Text Here');
    const [isFirstChange, setIsFirstChange] = useState(true); // Track the first change

    const handleOnClicke = () => {
        console.log('UpperCase is clicked');
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        console.log('On Change');
        if (isFirstChange) {
            setText(''); // Clear the text on first change
            setIsFirstChange(false); // Update the flag to false after the first change
        } else {
            setText(event.target.value); // Regular change handling
        }
    }

    return (
        <div className="form-group container">
            <h3>{heading}</h3>
            <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="exampleFormControlTextarea1"
                rows="5"
            />
            <button
                className="btn btn-primary"
                onClick={handleOnClicke}
            >
                UpperCase
            </button>
        </div>
    );
}

TextBox.propTypes = {
    heading: PropTypes.string // Corrected prop name
};
