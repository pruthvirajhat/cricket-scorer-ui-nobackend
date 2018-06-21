import { NEXT_BALL } from './actions';
import { initialState as gameState } from '../newGame/reducer';


const initialState = {
  innings1: {
    teamName: gameState.team1.name,
    overs: [{
      bowler: 'name',
      deliveries: [],
    },
    ],
  },
};

function getOvers(overs, delivery) {
  let over = overs[overs.length - 1];
  over = { ...over, bowler: delivery.bowler, deliveries: [...over.deliveries, delivery] };
  const newOvers = [...overs];
  newOvers[overs.length - 1] = over;
  return newOvers;
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_BALL:
      return {
        ...state,
        innings1: { ...state.innings1, overs: getOvers(state.innings1.overs, action.payload) },
      };

    default:
      return state;
  }
};

export default reducer;
