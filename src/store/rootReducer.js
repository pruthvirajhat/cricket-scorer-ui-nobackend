import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentballReducer from '../scorer/currentballreducer'

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
    currentBall: currentballReducer
});

export default rootReducer;