import React, {Component} from 'react';
// components
import PlayerOne from './playerOne';
import PlayerTwo from './playerTwo';
import Cort from './cort';

class PlayGame extends Component {
    state = {
        rounds: 3,
        countRoundGame: 0,
        countWinPlayerOne: 0,
        countWinPlayerTwo: 0,
        visibleIconLeft: null,
        visibleIconRight: null,
        disabledLeft: false,
        disabledRight: true,
        disabledButtonStart: true,
        loader: false,
        whoWin: null,
        playAgain: false,
        gameOver: false,
    };

    async componentWillMount() {
        await this.randomGame();
    }

    randomGame = () => {
        let numbers = [3, 5, 7];
        let rounds = numbers[Math.floor(Math.random() * numbers.length)];

        this.setState({rounds})
    };

    handlerOptionPlayerOne = option => this.setState({visibleIconLeft: option, disabledButtonStart: false});

    handlerStartGame = () => {
        this.setState({disabledLeft: true, disabledButtonStart: true, countRoundGame: this.state.countRoundGame + 1});

        let timerId = setInterval(() => {
            this.setState({loader: true});
        }, 0);

        setTimeout(() => {
            this.setState({loader: false}, () => {
                let arr = ['rock', 'paper', 'scissors'];

                let visibleIconRight = arr[Math.floor(Math.random() * arr.length)];

                this.setState({visibleIconRight}, () => {
                    let {visibleIconLeft, visibleIconRight} = this.state;

                    if (visibleIconLeft === 'rock') {
                        if (visibleIconRight === 'rock') {
                            this.setState({whoWin: 'together'})
                        } else if (visibleIconRight === 'paper') {
                            this.setState({whoWin: 'playerTwo', countWinPlayerTwo: this.state.countWinPlayerTwo + 1})
                        } else {
                            this.setState({whoWin: 'playerOne', countWinPlayerOne: this.state.countWinPlayerOne + 1})
                        }
                    } else if (visibleIconLeft === 'paper') {
                        if (visibleIconRight === 'rock') {
                            this.setState({whoWin: 'playerOne', countWinPlayerOne: this.state.countWinPlayerOne + 1})
                        } else if (visibleIconRight === 'paper') {
                            this.setState({whoWin: 'together'})
                        } else {
                            this.setState({whoWin: 'playerTwo', countWinPlayerTwo: this.state.countWinPlayerTwo + 1})
                        }
                    }
                    else if (visibleIconLeft === 'scissors') {
                        if (visibleIconRight === 'rock') {
                            this.setState({whoWin: 'playerTwo', countWinPlayerTwo: this.state.countWinPlayerTwo + 1})
                        } else if (visibleIconRight === 'paper') {
                            this.setState({whoWin: 'playerOne', countWinPlayerOne: this.state.countWinPlayerOne + 1})
                        } else {
                            this.setState({whoWin: 'together'})
                        }
                    }

                    if (this.state.countRoundGame === this.state.rounds) {
                        this.setState({gameOver: true})
                    } else {
                        this.setState({playAgain: true})
                    }
                });
            });
            clearInterval(timerId);
        }, 2000);
    };

    handlerPlayAgainGame = () => this.setState({
        visibleIconLeft: null,
        visibleIconRight: null,
        whoWin: null,
        playAgain: false,
        disabledLeft: false
    });

    handlerGameOver = () => {
        this.handlerPlayAgainGame();
        this.setState({
            countRoundGame: 0,
            countWinPlayerOne: 0,
            countWinPlayerTwo: 0,
        }, () => {
            this.props.handlerClearComponent();
        });
    };

    render() {
        let {
            rounds,
            countWinPlayerOne,
            countWinPlayerTwo,
            visibleIconLeft,
            disabledLeft,
            disabledRight,
            loader,
            disabledButtonStart,
            visibleIconRight,
            whoWin,
            playAgain,
            gameOver,
        } = this.state;

        let {roleA, roleB} = this.props;

        return (
            <div className="play-game">
                <div>
                    <h1>You're play {rounds} rounds of game</h1>
                </div>
                <div className="cort">
                    <PlayerOne
                        handlerOptionPlayerOne={this.handlerOptionPlayerOne}
                        disabledLeft={disabledLeft}
                    />
                    <Cort
                        countWinPlayerOne={countWinPlayerOne}
                        countWinPlayerTwo={countWinPlayerTwo}
                        handlerStartGame={this.handlerStartGame}
                        visibleIconLeft={visibleIconLeft}
                        visibleIconRight={visibleIconRight}
                        loader={loader}
                        disabledButtonStart={disabledButtonStart}
                        roleA={roleA}
                        roleB={roleB}
                        whoWin={whoWin}
                        playAgain={playAgain}
                        gameOver={gameOver}
                        handlerPlayAgainGame={this.handlerPlayAgainGame}
                        handlerGameOver={this.handlerGameOver}
                    />
                    <PlayerTwo
                        disabledRight={disabledRight}
                    />
                </div>
            </div>
        )
    }
}

export default PlayGame;
