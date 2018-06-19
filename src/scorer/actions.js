export const NEXT_BALL = 'NEXT_BALL';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const SELECT_RUNS = 'SELECT_RUNS';

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
