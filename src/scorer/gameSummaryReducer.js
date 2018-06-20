import { NEXT_BALL } from './actions';

const initialState =
  {
    innings1: {
      teamName: 'Team1',
      overs: [{
        bowler: 'name',
        deliveries: [{
          batsman: 'Karthik',
          ballType: 'N',
          wicket: 'Batsman name',
          runs: {
            batsman: 5,
            extras: 0,
          },
        },
        {
          batsman: 'Dilip ',
          ballType: 'N',
          wicket: '',
          runs: {
            batsman: 0,
            extras: 0,
          },
        }],
      },
      {
        bowler: 'name',
        deliveries: [{
          batsman: 'Dilip ',
          ballType: 'N',
          wicket: '',
          runs: {
            batsman: 3,
            extras: 0,
          },
        },
        {
          batsman: 'Name ',
          ballType: 'N',
          wicket: '',
          runs: {
            batsman: 0,
            extras: 0,
          },
        },
        ],
      },
      ],
    },
  };


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_BALL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};


export default reducer;
