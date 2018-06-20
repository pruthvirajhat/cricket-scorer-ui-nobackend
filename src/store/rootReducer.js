import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentballReducer from '../scorer/currentballreducer';
import scoreReducer from '../scorer/reducer';
import currentOverReducer from '../currentOver/reducer';
import gameSummaryReducer from '../scorer/gameSummaryReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreInformation: scoreReducer,
  currentBall: currentballReducer,
  currentOver: currentOverReducer,
  gameSummary: gameSummaryReducer,
});

export default rootReducer;
