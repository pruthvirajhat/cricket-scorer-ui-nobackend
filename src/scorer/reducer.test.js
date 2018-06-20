import reducer from './reducer';
import { initialState as gameState } from '../newGame/reducer';

describe('gameInformation/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const initialState = {
      team1:
            {
              name: 'team 1',
              wickets: 0,
              overs: 0,
              score: 0,
            },
      team2: {
        name: 'team 2',
        wickets: 0,
        overs: 0,
        score: 0,
      },
      currentlyBattingTeamName: gameState.team1.name,
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update scores of team1', () => {
    const expectedState = {
      team1:
        {
          name: 'team 1',
          wickets: 0,
          overs: 0,
          score: 10,
        },
      team2: {
        name: 'team 2',
        wickets: 0,
        overs: 0,
        score: 0,
      },
      currentlyBattingTeamName: gameState.team1.name,
    };
    expect(reducer(undefined, {
      type: 'NEXT_BALL',
      payload: {
        bowler: '',
        batsman: '',
        non_striker: '',
        ballType: 'N',
        wicket: '',
        runs: {
          batsman: 10,
          extras: 0,
        },
      },
    })).toEqual(expectedState);
  });
});

