import { Game } from "boardgame.io";

export type UnstableUnicornsState = {
    cards: string[]
}

export const UnstableUnicorns: Game<UnstableUnicornsState> = {
    setup: ()=> ({cards: ['basic unicorn 1', 'baby unicorn 1']}),
    moves: {
        drawCard: ({G, playerID}, id) => {
            console.log(`player ${playerID} has taken a go`);
            G.cards[0] =('extremely furtile unicorn')
            
            
        }
    },
    minPlayers: 2,
    maxPlayers: 6,
}