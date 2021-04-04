
import React from 'react';

// import { pushMessage } from '../firebase';

import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputEl, name, setText, text}) => {
    return (
        <IconButton 
            disabled={text === ''} 
            onClick={() =>{
                pushMessage({ name: 'aoimaru', text});
                setText('');
                inputEl.current.focus();
        }} >
            <SendIcon />
        </IconButton>
    );

};

export default MessageSubmitButton;