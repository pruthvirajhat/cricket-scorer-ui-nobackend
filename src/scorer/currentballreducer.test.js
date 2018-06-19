import reducer from './currentballreducer'

describe('scorer/currentballreducer', () =>
{
    it('should return initial state of current ball', () => {
        const expectedState = {
            bowler: "",
            batsman: "",
            ballType: 'N',
            non_striker: "",
            wicket: "",
            runs: {
                batsman: 0,
                extras: 0
            }
        };
        expect(reducer(undefined, undefined)).toEqual(expectedState);
    });

    it('should return state of current ball with batsman and nonstriker', ()=>{
        const expectedState = {
            bowler: "",
            batsman: "Player1.1",
            ballType: 'N',
            non_striker: "Player1.2",
            wicket: "",
            runs: {
                batsman: 0,
                extras: 0
            }
        };
        expect(reducer(undefined, {type:"NEXT_BALL" , payload : {batsman: "Player1.1", non_striker: "Player1.2"}}))
            .toEqual(expectedState);
    })
});