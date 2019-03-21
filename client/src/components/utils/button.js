// import React from 'react';
// import { Link } from 'react-router-dom';
 
// const MyButton = (props) => {

//     const buttons = () => {

//         if(props.type=="default"){
            
//                 return <Link
//                     to={props.linkTo}
//                     {...props.addStyles}
//                 >
//                 {props.title}
//                 </Link> 
           
//         }
        
//     }


//     return (
//         <div className="my_link">
//              {buttons()}   
//         </div>
//     );
// };

// export default MyButton;

import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return (
        <Button
            href={props.linkTo}
            variant="contained"
            size="small"
            {...props.addStyles}
        >
            
            {props.title}
        </Button>
    );
};

export default MyButton;