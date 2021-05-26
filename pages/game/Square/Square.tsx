import React from "react";
import createClasses from './style';
import {OnClickSquare} from "../game";

interface Props {
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