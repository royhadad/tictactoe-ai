import React from "react";
import createClasses from './style';
import {OnClickSquare} from "../game";
import TicTacToeGame, {TicTacToeState} from 'generic-min-max/dist/implementations/TicTacToe'
interface Props {
    state: TicTacToeState["board"][0][0];
    row: number;
    column: number;
    onClick: OnClickSquare
}

const Square: React.FC<Props> = (props: Props) => {
    const classes = createClasses();

    return (
        <div onClick={() => props.onClick(props.row, props.column)} className={classes.wrapper}>
        </div>
    )
}

export default Square;