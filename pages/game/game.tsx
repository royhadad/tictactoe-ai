import createClasses from './style';
import Square from "./Square";
import {createContext, Dispatch, SetStateAction, useState} from "react";
import TicTacToeGame, {
    Board,
    Square as SquareState,
    SquareLocation,
    TicTacToeState
} from "generic-min-max/dist/implementations/TicTacToe";
import {Box, Grid, Typography} from "@material-ui/core";
import {minMax} from "generic-min-max";

const _ = require('lodash');

const x = {a: 2};
const y = _.cloneDeep(x)
console.log('yaadsaassdasfa', y) // TODO: remove log

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

interface GameContextType {
    gameState: TicTacToeState;
    setGameState: Dispatch<SetStateAction<TicTacToeState>>;
    onClickSquare: OnClickSquare;
    isHumanTurn: boolean;
    setIsHumanTurn: Dispatch<SetStateAction<boolean>>;
};
const GameContextDefaultValue = {
    gameState: getNewGame(),
    setGameState: () => undefined,
    onClickSquare: onClickSquareDefaultValue,
    isHumanTurn: true,
    setIsHumanTurn: () => undefined
}

export const GameContext = createContext<GameContextType>(GameContextDefaultValue);

function Game() {
    const classes = createClasses();

    const [gameState, setGameState] = useState<TicTacToeState>(getNewGame());
    const [isHumanTurn, setIsHumanTurn] = useState<boolean>(true);
    const [isComputerThinking, setIsComputerThinking] = useState<boolean>(false);

    const onClickSquare: OnClickSquare = (squareLocation) => {
        // Filter out invalid moves
        if (!isHumanTurn || getSquareStateByLocation(gameState, squareLocation) !== SquareState.Empty) {
            return;
        }

        const nextGameState = _.cloneDeep(gameState);

        nextGameState.board[squareLocation[0]][squareLocation[1]] = gameState.player1Turn ? (SquareState.X) : (SquareState.O);
        nextGameState.player1Turn = !gameState.player1Turn;

        setGameState(nextGameState);
        setIsHumanTurn((prevState) => !prevState);
        setIsComputerThinking(false);

        // make computer move
        const ticTacToeGame = new TicTacToeGame(nextGameState);
        const continuation = minMax(ticTacToeGame, 9);

        setGameState(continuation.state);
        setIsHumanTurn(false);
        setIsComputerThinking(false);
    }

    return (
        <GameContext.Provider
            value={{
                gameState,
                setGameState,
                onClickSquare,
                isHumanTurn,
                setIsHumanTurn
            }}
        >
            <Grid container direction='column' alignItems='center'>
                <Grid item>
                    <Box mb={20} className={classes.wrapper}>
                        <Typography variant='h1' color='primary'>
                            This is the Tic-tac-toe game
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box mb={10}>
                        <Typography variant='h3' color='secondary'>
                            {isComputerThinking && 'Computer thinking...'}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid item>
                            <Grid container direction='row'>
                                <Grid item>
                                    <Square location={[0, 0]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[0, 1]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[0, 2]}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction='row'>
                                <Grid item>
                                    <Square location={[1, 0]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[1, 1]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[1, 2]}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction='row'>
                                <Grid item>
                                    <Square location={[2, 0]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[2, 1]}/>
                                </Grid>
                                <Grid item>
                                    <Square location={[2, 2]}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </GameContext.Provider>)
}

export default Game;