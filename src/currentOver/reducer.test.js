import reducer from './reducer';
import {initialState as gameState} from "../newGame/reducer";

describe('gameInformation/reducer', () => {
    it('should return initial state of scores of each team', () => {
        const initialState = [0, 0, 0, 0, 0, 0];
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});