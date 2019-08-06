import React from 'react';
import {paper, rock, scissors} from "../svg";

export default function PlayerTwo(p) {
    return (
        <div className={`player-container block-2 ${p.disabledRight ? 'disabled' : ''}`}>
            <span/>
            <section>
                <button onClick={()=> p.handlerOptionPlayerOne('rock')}>{rock}</button>
                <button onClick={()=> p.handlerOptionPlayerOne('paper')}>{paper}</button>
                <button onClick={()=> p.handlerOptionPlayerOne('scissors')}>{scissors}</button>
            </section>
        </div>
    )
}
