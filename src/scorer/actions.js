import { Routes } from '../routes/routes';
import history from '../routes/history';

export const NEXT_BALL = 'NEXT_BALL';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const SELECT_RUNS = 'SELECT_RUNS';
export const SELECT_NEXT_BATSMAN = 'SELECT_NEXT_BATSMAN';

export function selectPlayerAction(players) {
  return {
    type: SELECT_PLAYER,
    payload: players,
  };
}

export function selectRunsAction(runs) {
  return {
    type: SELECT_RUNS,
    payload: runs,
  };
}

export function selectBatsmanOut(batsmanName) {
  return {
    type: SELECT_NEXT_BATSMAN,
    payload: batsmanName,
  };
}

export const navigateToStatsAction = () => () => {
  history.push(Routes.GAME_DETAILS);
};

export function nextBallAction(currentBall) {
  return {
    type: NEXT_BALL,
    payload: currentBall,
  };
}

