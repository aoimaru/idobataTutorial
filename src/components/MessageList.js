import React, { useEffect, useState } from 'react';

import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

import MessageItem from './MessageItem';



const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%',
    },
})

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef.orderByKey().limitToLast(10).on('value', (snapshot) => {
            const messages = snapshot.val();
            if(messages === null) return;
            const entries = Object.entries(messages);
            const newMessage = entries.map((entry) => {
                // const key = entry[0];
                // const nameAndText = entry[1];
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            });
            setMessages(newMessage);
        });
    }, []);

    const length = messages.length;

    return (
        <List className={classes.root} >
            {
                messages.map(({ key, name, text }, index) =>{
                    const isLastItem = length === index + 1;

                    return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem}> </MessageItem>;
                })
            }
        </List>
    );

    
    
}

export default MessageList;