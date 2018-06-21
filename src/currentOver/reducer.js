import { NEXT_BALL } from '../scorer/actions';

export const initialState = {
  ballsCount: 0,
  currentOverScore: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_BALL:
      if (state.ballsCount === 6) {
        return {
          ...state,
          ballsCount: 1,
          currentOverScore: [action.payload.runs.batsman.toString()],
        };
      }
      return {
        ...state,
        ballsCount: action.payload.ballType === 'N' ? state.ballsCount + 1 : state.ballsCount,
        currentOverScore: [...state.currentOverScore, action.payload.runs.batsman.toString()],
      };
    default:
      return state;
  }
};

export default reducer;
