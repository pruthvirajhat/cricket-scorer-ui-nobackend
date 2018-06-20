import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentballReducer from '../scorer/currentballreducer';
import scoreReducer from '../scorer/reducer';
import gameSummaryReducer from '../scorer/gameSummaryReducer';
import currentOverReducer from '../currentOver/reducer';
import bowlersReducer from '../bowlerDetails/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreInformation: scoreReducer,
  currentBall: currentballReducer,
  currentOver: currentOverReducer,
  matchCurrentStatus: bowlersReducer,
  gameSummary: gameSummaryReducer,
});

export default rootReducer;
