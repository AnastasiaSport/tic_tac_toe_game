import './App.css';
import Board from "./components/Board";
import {useEffect, useState} from "react";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [gamerX, setGamerX] = useState(true)
    const [winner, setWinner] = useState(null)

    const handleMove = (ind) => {
        if (board[ind] === null) {
            const nextGamer = gamerX ? 'X' : 'O';
            const newBoard = board.map((el, index) => ind === index ? nextGamer : el)
            setBoard(newBoard)
            setGamerX(!gamerX)
        }
    }
    const winnerVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]
    const checkWinner=()=>{
        for(let i = 0; i < winnerVariants.length; i++ ){
            const [a, b, c ] = winnerVariants[i]
            if(board[a] === board[b] && board[b] === board[c] && board[c] !== null){
                setWinner(board[a])
            }
        }
    }
    useEffect(()=>{
        checkWinner()
    }, [board])

    return (
        <div className="App">
            <h1> Tic Tac Toe Game </h1>
            <Board
                board={board}
                handleMove={handleMove}
            />
            { winner && <h2> Congratulations, {winner} !!! </h2>}

        </div>
    );
}

export default App;
