import { NEXT_BALL } from '../scorer/actions';

export const initialState = {
  ballsCount: 0,
  currentOverScore: ['', '', '', '', '', ''],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_BALL:
      return {
        ...state,
        over: {
          ...state.over, currentOverScore: action.payload.runs.batsman,
        },
      };
    default:
      return state;
  }
};

export default reducer;
