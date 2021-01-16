import React from 'react';

 function Line (props) {
    return (
        <div>
            <div style={{ paddingBottom:20, fontSize: 20 }}>{props.text}</div>
            <br/>
        </div>
    );
}

export default Line;