import reducer from './gameSummaryReducer';

describe('scorer/gameSummaryreducer', () => {
  it('should update initial state of gameSummary', () => {
    const expectedState = {
      innings1: {
        teamName: 'team 1',
        overs: [{
          bowler: undefined,
          deliveries: [{
            batsman: 'Karthik',
            ballType: 'N',
            wicket: 'Batsman name',
            runs: {
              batsman: 5,
              extras: 0,
            },
          }],
        },
        ],
      },
    };
    expect(reducer(undefined, {
      type: 'NEXT_BALL',
      payload: {
        batsman: 'Karthik',
        ballType: 'N',
        wicket: 'Batsman name',
        runs: {
          batsman: 5,
          extras: 0,
        },
      },
    })).toEqual(expectedState);
  });

  it('should update deliveries gameSummary state', () => {
    const initialState =
      {
        innings1: {
          teamName: 'Team1',
          overs: [{
            bowler: '',
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
          ],
        },
      };
    const expectedState = {
      innings1: {
        teamName: 'Team1',
        overs: [{
          bowler: undefined,
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
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: 'Batsman name',
            runs: {
              batsman: 5,
              extras: 0,
            },
          }],
        },
        ],
      },
    };
    expect(reducer(initialState, {
      type: 'NEXT_BALL',
      payload: {
        batsman: 'Karthik',
        ballType: 'N',
        wicket: 'Batsman name',
        runs: {
          batsman: 5,
          extras: 0,
        },
      },
    })).toEqual(expectedState);
  });
});
