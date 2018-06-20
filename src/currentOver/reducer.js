import { NEXT_BALL } from '../scorer/actions';

export const initialState = {
  ballsCount: 0,
  currentOverScore: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_BALL:
      return {
        ...state,
        ballsCount: state.ballsCount + 1,
        currentOverScore: [...state.currentOverScore, action.payload.runs.batsman.toString()],
      };
    default:
      return state;
  }
};

export default reducer;
