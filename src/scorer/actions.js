export const NEXT_BALL='NEXT_BALL';
export const SELECT_PLAYER='SELECT_PLAYER'

export default function selectPlayerAction(players) {
    return{
        type :SELECT_PLAYER,
        payload :players
    }
}