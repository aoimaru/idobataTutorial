
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    console.log({ text })
    return <TextField 
    fullWidth={true} 
    onChange={(e) => {
        setText(e.target.value);
    }}

    onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if(text === '') return;
        
        console.log({key: e.key});
        if(e.key === 'Enter'){
            // setName(e.target.value);
            setText('');
            e.preventDefault();
        }
    }}
    onCompositionStart={() => setIsComposed(true)}
    onCompositionEnd={() => setIsComposed(false)}
    value={text}
    />;
};


export default MessageField;