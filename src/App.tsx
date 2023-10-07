import {Client, } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer';
import './App.css';
import { UnstableUnicorns } from './Game';
import { UnstableUnicornsBoard } from './Board';
import { useEffect, useState } from 'react';

const UUClient = Client({game: UnstableUnicorns, board: UnstableUnicornsBoard,   multiplayer: SocketIO({server: 'localhost:8000'}),
})

const App = () => {
    const [nameInput, setNameInput] = useState('')
    const [playerID, setPlayerID] = useState('')

    const localStyle = {
        display: 'flex', 
        justifyContent: 'space-between',
        margin: 'auto',
        marginTop: '100px'        
    }
    if (playerID === '') {
        return (
        <form onSubmit={(e)=> { e.preventDefault(); setPlayerID(nameInput)}}>
            <input value={nameInput} onChange={(e)=>setNameInput(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
        )
    }

    return (
    <div style={localStyle}>
        <UUClient playerID={playerID}/>
    </div>
)
    }
export default App;
