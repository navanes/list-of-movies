import React from 'react';

//Input: liked: boolean
//Output: onClick


const Like = (props) => {
    let classes = "fa fa-heart";
    classes += props.liked ? "" : "-o";
    return (
        <i onClick={props.onClick} className={classes} aria-hidden="true" style={{cursor:"pointer"}}></i>
    );

};



export default Like;


