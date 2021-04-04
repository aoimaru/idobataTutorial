
import React, { useRef, useEffect } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar'; 


const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
    },
    inline: {
      display: 'inline',
    },
}));

const MessageItem = ({ name, text, isLastItem }) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if(isLastItem){
            // Todo: ここでスクロールする
            ref.current.scrollIntoView({ behavior: 'smooth'});
        }
    }, [ isLastItem]);
    return (
        <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {text}
            </Typography>
          }
        />
      </ListItem>
    );
};

export default MessageItem;