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
  it('should return score and balls for one batsman if overs has single over played by same batsman', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 2,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 2,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 4,
      Balls: 2,
      Fours: 0,
      Sixes: 0,
      StrikeRate: 200,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });
  it('should return fours for one batsman if overs (array) has single over played by same batsman', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 2,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 4,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 6,
      Balls: 2,
      Fours: 1,
      Sixes: 0,
      StrikeRate: 300,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });
  it('should return number of sixes for one batsman if overs (array) has single over played by same batsman', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 2,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 8,
      Balls: 2,
      Fours: 0,
      Sixes: 1,
      StrikeRate: 400,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });

  it('should return one four and one six for one batsman if overs (array) has single over played by same batsman', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 4,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 10,
      Balls: 2,
      Fours: 1,
      Sixes: 1,
      StrikeRate: 500,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });

  it('should return results for two batsman if overs (array) has single over played by both batsman', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
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
    },
    {
      Name: 'Dilip',
      Runs: 6,
      Balls: 1,
      Fours: 0,
      Sixes: 1,
      StrikeRate: 600,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });
  it('should return results for two batsman they played complete over', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 8,
      Balls: 3,
      Fours: 0,
      Sixes: 1,
      StrikeRate: 266.67,
    },
    {
      Name: 'Dilip',
      Runs: 13,
      Balls: 3,
      Fours: 0,
      Sixes: 2,
      StrikeRate: 433.33,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });

  it('should return results for two batsman if they completed two overs ', () => {
    const overs = [
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
        ],
      },
      {
        bowler: 'name',
        deliveries: [
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Karthik',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 1,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
          {
            batsman: 'Dilip',
            ballType: 'N',
            wicket: '',
            runs: {
              batsman: 6,
              extras: 0,
            },
          },
        ],
      },
    ];
    const expected = [{
      Name: 'Karthik',
      Runs: 16,
      Balls: 6,
      Fours: 0,
      Sixes: 2,
      StrikeRate: 266.67,
    },
    {
      Name: 'Dilip',
      Runs: 26,
      Balls: 6,
      Fours: 0,
      Sixes: 4,
      StrikeRate: 433.33,
    }];

    expect(getBatsmenData(overs)).toEqual(expected);
  });
});
