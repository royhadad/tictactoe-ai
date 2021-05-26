import createClasses from './style';
import Square from "./Square";
import {useState} from "react";
import {SquareLocation} from "generic-min-max/dist/implementations/TicTacToe";

export type OnClickSquare = (squareLocation: SquareLocation) => void;

function Game() {
    const classes = createClasses();

    const gameState = useState()

    const onClickSquare: OnClickSquare = () => {

    }

    return (
        <div>
            <div className={classes.wrapper}>this is the tic tac toe game</div>
            <div>
                <div>
                    <Square onClick={onClickSquare} location={[0, 0]} state={}/>
                    <Square onClick={onClickSquare} location={[0, 1]}/>
                    <Square onClick={onClickSquare} location={[0, 2]}/>
                </div>
                <div>
                    <Square onClick={onClickSquare} location={[1, 0]}/>
                    <Square onClick={onClickSquare} location={[1, 1]}/>
                    <Square onClick={onClickSquare} location={[1, 2]}/>
                </div>
                <div>
                    <Square onClick={onClickSquare} location={[2, 0]}/>
                    <Square onClick={onClickSquare} location={[2, 1]}/>
                    <Square onClick={onClickSquare} location={[2, 2]}/>
                </div>
            </div>
        </div>)
}

export default Game;