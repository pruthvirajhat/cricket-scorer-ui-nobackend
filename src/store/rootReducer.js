import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentballReducer from '../scorer/currentballreducer';
import scoreReducer from '../scorer/reducer';
import gameSummaryReducer from '../scorer/gameSummaryReducer';
import currentOverReducer from '../currentOver/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreInformation: scoreReducer,
  currentBall: currentballReducer,
  currentOver: currentOverReducer,
  gameSummary: gameSummaryReducer,
});

export default rootReducer;
