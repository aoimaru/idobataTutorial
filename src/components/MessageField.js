
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

const MessageField = ({ inputEl, name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    return (
    <TextField 
        autoFocus
        fullWidth={true}
        inputRef={inputEl}
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
                pushMessage({ name: 'aoimaru', text });
                setText('');
                e.preventDefault();
            }
        }}
        onCompositionStart={() => setIsComposed(true)}
        onCompositionEnd={() => setIsComposed(false)}
        value={text}
    />
    );
};


export default MessageField;