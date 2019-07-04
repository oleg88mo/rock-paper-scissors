import React from 'react';
import {rock, paper, scissors} from '../../components/svg';

export default function PlayerOne(p) {
    return (
        <div className={`player-container ${p.disabledLeft ? 'disabled' : ''}`}>
           <span>Choose option</span>

            <button onClick={()=> p.handlerOptionPlayerOne('rock')}>{rock}</button>
            <button onClick={()=> p.handlerOptionPlayerOne('paper')}>{paper}</button>
            <button onClick={()=> p.handlerOptionPlayerOne('scissors')}>{scissors}</button>
        </div>
    )
}
