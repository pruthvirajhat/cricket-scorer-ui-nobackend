import reducer from './reducer';

describe('gameInformation/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const initialState = [0, 0, 0, 0, 0, 0];
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
