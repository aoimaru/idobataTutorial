import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        gridRow: 2,
    },
})

const MessageInputFeild = () => {
    const classes = useStyles();
    return <div className={classes.root}>MessageInputFeild</div>;
    
}

export default MessageInputFeild;