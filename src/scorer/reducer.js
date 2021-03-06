import { initialState as gameState } from '../newGame/reducer';
import { NEXT_BALL, SELECT_NEXT_BATSMAN } from './actions';

export const initialState = {
  team1:
        {
          name: gameState.team1.name,
          wickets: 0,
          overs: 0,
          score: 0,
        },
  team2: {
    name: gameState.team2.name,
    wickets: 0,
    overs: 0,
    score: 0,
  },
  currentlyBattingTeamName: gameState.team1.name,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_NEXT_BATSMAN:
      if (state.currentlyBattingTeamName === state.team1.name) {
        return {
          ...state,
          team1: {
            ...state.team1, wickets: state.team1.wickets + 1,
          },
        };
      }
      return {
        ...state,
        team2: {
          ...state.team2, wickets: state.team1.wickets + 1,
        },
      };

    case NEXT_BALL:
      if (state.currentlyBattingTeamName === state.team1.name) {
        return {
          ...state,
          team1: {
            ...state.team1, score: action.payload.runs.batsman + state.team1.score,
          },
        };
      }
      return {
        ...state,
        team2: {
          ...state.team2, score: action.payload.runs.batsman + state.team2.score,
        },
      };
    default:
      return state;
  }
};

export default reducer;
