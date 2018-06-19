const initialState={
    bowler: "",
    batsman: "",
    ballType: 'N',
    non_striker: "",
    wicket:"",
    runs:{
        batsman:0,
        extras:0
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'SELECT_PLAYER':
            return {
                ...state,
                ...action.payload
            }
    }
    return state;
};

export default reducer;