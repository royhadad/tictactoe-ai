import createClasses from './style';
import Square from "./Square";
import {createContext, useState} from "react";
import {
    Board,
    Square as SquareState,
    SquareLocation,
    TicTacToeState
} from "generic-min-max/dist/implementations/TicTacToe";

export type OnClickSquare = (squareLocation: SquareLocation) => void;
const onClickSquareDefaultValue: OnClickSquare = (squareLocation => {
})

export const getSquareStateByLocation = (gameState: TicTacToeState, location: SquareLocation): SquareState => {
    return (gameState.board[location[0]][location[1]])
};

const getEmptyBoard = (): Board => ([
    [SquareState.Empty, SquareState.Empty, SquareState.Empty],
    [SquareState.Empty, SquareState.Empty, SquareState.Empty],
    [SquareState.Empty, SquareState.Empty, SquareState.Empty]
]);

const getNewGame = (): TicTacToeState => ({
    player1Turn: true,
    board: getEmptyBoard()
})

export const GameContext = createContext<{ gameState: TicTacToeState, onClickSquare: OnClickSquare }>({
    gameState: getNewGame(),
    onClickSquare: onClickSquareDefaultValue
});


function Game() {
    const classes = createClasses();

    const [gameState, setGameState] = useState(getNewGame());

    const onClickSquare: OnClickSquare = () => {

    }


    return (
        <GameContext.Provider
            value={{
                gameState: gameState,
                onClickSquare
            }}
        >
            <div>
                <div className={classes.wrapper}>this is the tic tac toe game</div>
                <div>
                    <div>
                        <Square location={[0, 0]}/>
                        <Square location={[0, 1]}/>
                        <Square location={[0, 2]}/>
                    </div>
                    <div>
                        <Square location={[1, 0]}/>
                        <Square location={[1, 1]}/>
                        <Square location={[1, 2]}/>
                    </div>
                    <div>
                        <Square location={[2, 0]}/>
                        <Square location={[2, 1]}/>
                        <Square location={[2, 2]}/>
                    </div>
                </div>
            </div>
        </GameContext.Provider>)
}

export default Game;