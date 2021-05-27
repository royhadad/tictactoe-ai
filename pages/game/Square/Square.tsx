import React, {useContext} from "react";
import createClasses from './style';
import {GameContext, getSquareStateByLocation} from "../game";
import {Square as SquareStates, SquareLocation} from 'generic-min-max/dist/implementations/TicTacToe'
import {Grid} from "@material-ui/core";

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
        <Grid
            onClick={() => onClickSquare(props.location)}
            className={classes.wrapper}
            container
            alignItems='center'
            justify='center'
        >
            {getSquareContent(squareState)}
        </Grid>
    )
}

export default Square;