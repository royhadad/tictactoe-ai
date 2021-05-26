import createClasses from './style';
import Square from "./Square/Square";

export type OnClickSquare = (row: number, column: number) => void;

function Game() {
    const classes = createClasses();

    const onClickSquare: OnClickSquare = () => {

    }

    return (
        <div>
            <div className={classes.wrapper}>this is the tic tac toe game</div>
            <div>
                <div>
                    <Square onClick={onClickSquare} row={0} column={0}/>
                    <Square onClick={onClickSquare} row={0} column={1}/>
                    <Square onClick={onClickSquare} row={0} column={2}/>
                </div>
                <div>
                    <Square onClick={onClickSquare} row={1} column={0}/>
                    <Square onClick={onClickSquare} row={1} column={1}/>
                    <Square onClick={onClickSquare} row={1} column={2}/>
                </div>
                <div><Square onClick={onClickSquare} row={2} column={0}/>
                    <Square onClick={onClickSquare} row={2} column={1}/>
                    <Square onClick={onClickSquare} row={2} column={2}/>
                </div>
            </div>
        </div>)
}

export default Game;