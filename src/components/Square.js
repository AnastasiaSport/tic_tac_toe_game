import React from 'react';

const squareStyle = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
}

function Square(props){
    return(
        <button style={squareStyle} onClick={()=>props.handleMove(props.ind)}>{props.value}
        </button>
    )
}
export default Square;