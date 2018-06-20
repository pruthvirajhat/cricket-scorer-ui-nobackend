import reducer from './reducer';

describe('gameInformation/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const expectedState = {
      ballsCount: 0,
      currentOverScore: [],
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should update ballscount and score', () => {
    const expectedState = {
      ballsCount: 1,
      currentOverScore: ['1'],
    };
    expect(reducer(undefined, { type: 'NEXT_BALL', payload: { runs: { batsman: 1, extras: 0 } } })).toEqual(expectedState);
  });
});
