import { getBowlingTableDetails } from './bowingStats';

describe('bowlingStats', () => {
  it('should return array of bowling details', () => {
    const overs = [{
      bowler: 'name',
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
      bowler: 'name',
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
    ];


    const expected = [{
      name: 'name', over: 2, maiden: 2, runs: 0, wickets: 4,
    }];
    expect(getBowlingTableDetails(overs)).toEqual(expected);
  });
});
