import reducer from './reducer';

describe('gameInformation/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const expectedState = {
      ballsCount: 0,
      currentOverScore: ['', '', '', '', '', ''],
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
});
