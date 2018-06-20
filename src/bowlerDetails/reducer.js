const initialState =
    {
      innings1: {
        teamName: 'Team1',
        overs: [{
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
        ],
      },
      innings2: {

      },
    };


const reducer = (state = initialState) => state;

export default reducer;

