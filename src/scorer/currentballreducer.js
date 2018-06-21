import { SELECT_PLAYER, SELECT_RUNS } from './actions';
import { initialState as gameState } from '../newGame/reducer';

const initialState = {
  batsman: gameState.team1.players[0],
  non_striker: '',
  ballType: 'N',
  wicket: '',
  runs: {
    batsman: 0,
    extras: 0,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_PLAYER:
      return {
        ...state,
        ...action.payload,
      };
    case SELECT_RUNS:
      return {
        ...state,
        runs: { ...state.runs, batsman: action.payload },
      };
    default:
      return state;
  }
};


export default reducer;
