import { SELECT_NEXT_BATSMAN, SELECT_PLAYER, SELECT_RUNS, NEXT_BALL } from './actions';
import { initialState as gameState } from '../newGame/reducer';

const initialState = {
  batsman: gameState.team1.players[0],
  non_striker: gameState.team1.players[1],
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

    case SELECT_NEXT_BATSMAN:
      return {
        ...state,
        wicket: state.batsman,
        batsman: action.payload,
      };

    case NEXT_BALL:
      return {
        ...state, wicket: '',
      };
    default:
      return state;
  }
};


export default reducer;
