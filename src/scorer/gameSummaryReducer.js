import { NEXT_BALL } from './actions';
import { initialState as gameState } from '../newGame/reducer';

const initialState = {
  innings1: {
    striker: '',
    nonStriker: '',
    teamName: gameState.team1.name,
    overs: [{
      bowler: gameState.team2.players[1],
      deliveries: [],
    },
    ],
  },
};

function getOvers(overs, delivery) {
  let over = overs[overs.length - 1];
  let ballcount = 0;
  for (let i = 0; i < over.deliveries.length; i += 1) {
    if (over.deliveries[i].ballType === 'N') {
      ballcount += 1;
    }
  }
  let newOvers = [];
  if (ballcount === 6) {
    over = { bowler: gameState.team2.players[1], deliveries: [{ ...delivery }] };
    newOvers = [...overs, over];
  } else {
    over = {
      ...over,
      bowler: gameState.team2.players[1],
      deliveries: [...over.deliveries, delivery],
    };
    newOvers = [...overs];
    newOvers[overs.length - 1] = over;
  }
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
