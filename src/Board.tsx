import type { BoardProps } from 'boardgame.io/react';
import { UnstableUnicornsState } from "./Game";

interface UnstableUnicornsProps extends BoardProps<UnstableUnicornsState> {

}

export function UnstableUnicornsBoard(props: UnstableUnicornsProps) {
    const style = {width: '500px', height: '500px', backgroundColor: 'red'}
    return (
        <>
            <h1>Current players: </h1>
            <h2>{props.ctx.currentPlayer}</h2>
            <div style={style}></div>
        </>
    )
}