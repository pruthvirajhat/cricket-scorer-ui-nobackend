import getBatsmenData from './getBatsmenData';

describe('get batsmen data function test', () => {
  it('should return empty array from empty overs array', () => {
    const overs = [];
    expect(getBatsmenData(overs)).toEqual([]);
  });

  it('should return score for one batsman if overs has single ball in single over', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: 'Batsman name',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
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
      Name: 'Karthik',
      Runs: 1,
      Balls: 1,
      Fours: 0,
      Sixes: 0,
      StrikeRate: 100,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });
});
