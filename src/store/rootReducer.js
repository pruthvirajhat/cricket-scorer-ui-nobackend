import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentballReducer from '../scorer/currentballreducer'
import scoreReducer from '../scorer/reducer';
import currentOverReducer from '../currentOver/reducer'

const rootReducer = combineReducers({
    gameInformation: gameInformationReducer,
    scoreInformation: scoreReducer,
    currentBall: currentballReducer,
    currentOver: currentOverReducer
});

export default rootReducer;