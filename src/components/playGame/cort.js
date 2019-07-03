import React from 'react';
import {rock, paper, scissors, hero_1, hero_2, hero_3, hero_4, hero_5, hero_6, hero_7, hero_8 } from '../../components/svg';
// components
import PlayerGameLoader from './loader';

const renderPlayerIcon = (role, heroes) => {
    return heroes && heroes.map(hero => {
        if(hero.name === role){
            return hero.img;
        }else{
            return null;
        }
    });
};

export default function Cort(p) {
    return (
        <div className="cort-container">
            <header>
                <span>
                    {renderPlayerIcon(p.roleA, [
                        {name: "hero_1", img: hero_1},
                        {name: "hero_2", img: hero_2},
                        {name: "hero_3", img: hero_3},
                        {name: "hero_4", img: hero_4},
                        {name: "hero_5", img: hero_5},
                        {name: "hero_6", img: hero_6},
                        {name: "hero_7", img: hero_7},
                        {name: "hero_8", img: hero_8},
                    ])}
                    {p.countWinPlayerOne}
                </span>
                <span>
                    {p.countWinPlayerTwo}
                    {renderPlayerIcon(p.roleB, [
                        {name: "hero_1", img: hero_1},
                        {name: "hero_2", img: hero_2},
                        {name: "hero_3", img: hero_3},
                        {name: "hero_4", img: hero_4},
                        {name: "hero_5", img: hero_5},
                        {name: "hero_6", img: hero_6},
                        {name: "hero_7", img: hero_7},
                        {name: "hero_8", img: hero_8},
                    ])}
                </span>
            </header>
            <main>
                {p.whoWin === 'together' && <span className="who-win">together win</span>}
                {p.whoWin === 'playerOne' && <span className="who-win">You win</span>}
                {p.whoWin === 'playerTwo' && <span className="who-win">You lose</span>}

                {p.visibleIconLeft === 'rock' && <div className="p-left slideOutRight animated"><span>{rock}</span></div>}
                {p.visibleIconLeft === 'paper' && <div className="p-left slideOutRight animated"><span>{paper}</span></div>}
                {p.visibleIconLeft === 'scissors' && <div className="p-left slideOutRight animated"><span>{scissors}</span></div>}

                {p.loader && <PlayerGameLoader/>}

                {p.visibleIconRight === 'rock' && <div className="p-right slideOutLeft animated"><span>{rock}</span></div>}
                {p.visibleIconRight === 'paper' && <div className="p-right slideOutLeft animated"><span>{paper}</span></div>}
                {p.visibleIconRight === 'scissors' && <div className="p-right slideOutLeft animated"><span>{scissors}</span></div>}
            </main>
            <footer>
                {p.playAgain
                    ?
                        <button onClick={p.handlerPlayAgainGame}>Play again!</button>
                    :
                        p.gameOver
                            ?
                                <button onClick={p.handlerGameOver}>Game over</button>
                            :
                                <button onClick={p.handlerStartGame} className={`${p.disabledButtonStart ? 'disabled' : ''}`}>Start</button>
                }
            </footer>
        </div>
    )
}
