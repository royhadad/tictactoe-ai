import React, {useContext} from "react";
import createClasses from './style';
import {GameContext, getSquareStateByLocation} from "../game";
import {Square as SquareStates, SquareLocation} from 'generic-min-max/dist/implementations/TicTacToe'
import noop from 'lodash/noop';

interface Props {
    location: SquareLocation;
}

const getSquareContent = (squareState: SquareStates): string => {
    if (squareState === SquareStates.X) {
        return 'X';
    } else if (squareState === SquareStates.O) {
        return 'O';
    } else {
        return '';
    }
};

const Square: React.FC<Props> = (props: Props) => {
    const classes = createClasses();
    const {gameState, onClickSquare} = useContext(GameContext);
    const squareState = getSquareStateByLocation(gameState, props.location);

    return (
        <div
            onClick={squareState === SquareStates.Empty ? () => onClickSquare(props.location) : noop}
            className={classes.wrapper}
        >
            {getSquareContent(squareState)}
        </div>
    )
}

export default Square;