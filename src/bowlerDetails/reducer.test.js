import reducer from './reducer';

describe('bowlerDetails/reducer', () => {
  it('should return initial state of bowling details', () => {
    const initialState =
          {
            innings1: {
              teamName: 'Team1',
              overs: [{
                bowler: 'Manisha',
                deliveries: [{
                  batsman: 'Name ',
                  ballType: 'N',
                  wicket: 'Batsman name',
                  runs: {
                    batsman: 0,
                    extras: 0,
                  },
                },
                {
                  batsman: 'Name ',
                  ballType: 'N',
                  wicket: 'Batsman name',
                  runs: {
                    batsman: 0,
                    extras: 0,
                  },
                }],
              },
              {
                bowler: 'Manisha',
                deliveries: [{
                  batsman: 'Name ',
                  ballType: 'N',
                  wicket: 'Batsman name',
                  runs: {
                    batsman: 0,
                    extras: 0,
                  },
                },
                {
                  batsman: 'Name ',
                  ballType: 'N',
                  wicket: 'Batsman name',
                  runs: {
                    batsman: 0,
                    extras: 0,
                  },
                },
                ],
              },
              ],
            },
            innings2: {

            },
          };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
