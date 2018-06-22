import reducer from './reducer';

describe('currentOver/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const expectedState = {
      ballsCount: 0,
      currentOverScore: [],
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should update ballscount and score when ballType is Normal', () => {
    const expectedState = {
      ballsCount: 1,
      currentOverScore: ['1(W)'],
    };
    expect(reducer(undefined, { type: 'NEXT_BALL', payload: { ballType: 'N', runs: { batsman: 1, extras: 0 } } })).toEqual(expectedState);
  });

  it('should not update ballscount and score when ballType is not N', () => {
    const expectedState = {
      ballsCount: 1,
      currentOverScore: ['1(W)'],
    };
    expect(reducer({
      ballsCount: 1,
      currentOverScore: [],
    }, { type: 'NEXT_BALL', payload: { ballType: 'B', runs: { batsman: 1, extras: 0 } } })).toEqual(expectedState);
  });

  // it('should update ballcount to 1 and clear array when ballcount 6', () => {
  //   const expectedState = {
  //     ballsCount: 1,
  //     currentOverScore: ['1'],
  //   };
  //   expect(reducer({
  //     ballsCount: 6,
  //     currentOverScore: ['1', '1', '1', '1', '1', '1'],
  //   }, { type: 'NEXT_BALL', payload: { ballType: 'B', runs: { batsman: 1, extras: 0 } } }))
  // .toEqual(expectedState);
  // });
});
