import React from 'react';

 function Line (props) {
    return (
        <div>
            <div style={{ paddingTop:10, fontSize: 25 }}>{props.text}</div>
            <br/>
        </div>
    );
}

export default Line;