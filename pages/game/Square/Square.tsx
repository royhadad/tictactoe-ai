import React from "react";
import createClasses from './style';
import {OnClickSquare} from "../game";
import {Square as SquareStates, SquareLocation} from 'generic-min-max/dist/implementations/TicTacToe'

interface Props {
    state: SquareStates;
    location: SquareLocation;
    onClick: OnClickSquare;
}

const Square: React.FC<Props> = (props: Props) => {
    const classes = createClasses();

    return (
        <div onClick={() => props.onClick(props.location)} className={classes.wrapper}>
        </div>
    )
}

export default Square;