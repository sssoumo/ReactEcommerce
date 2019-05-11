
import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return (
        <Button
            href={props.linkTo}
            onClick={props.functionIn}
            variant="contained"
            size="small"
            {...props.addStyles}
        >
            
            {props.title}
        </Button>
    );
};

export default MyButton;