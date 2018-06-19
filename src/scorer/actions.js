// import {CREATE_GAME} from "../home/actions";
import {Routes} from "../routes/routes";
import history from "../routes/history";

export const NEXT_BALL='NEXT_BALL';
export const SELECT_PLAYER='SELECT_PLAYER'

export default function selectPlayerAction(players) {
    return{
        type :SELECT_PLAYER,
        payload :players
    }
}

export const navigateToStatsAction = () => (dispatch) => {
    //dispatch({ type: CREATE_GAME });
    history.push(Routes.GAME_DETAILS);
};