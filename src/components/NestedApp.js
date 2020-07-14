import React from 'react';

export default function(props){
    return (
        <div style={{border:'1px solid green',padding:'5px'}}>
            <h2>Nested component: {props.title}</h2>
        </div>
    );
}