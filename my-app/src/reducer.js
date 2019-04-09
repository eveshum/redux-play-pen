import { combineReducers } from 'redux';
import { LOG_MESSAGE, RESET_LOGS } from './actions.js';

const initialMessageState = { message: 'initial message' };
const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case LOG_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case RESET_LOGS:
      return {
        ...state,
        message: initialMessageState.message,
      };
    default:
      return state;
  }
};

const logMetricsInitialState = { timesLogged: 0 };
const logMetricReducer = (state = logMetricsInitialState, action) => {
  switch(action.type) {
    case LOG_MESSAGE:
      return {
        ...state,
        timesLogged: state.timesLogged + 1,
      };
    case RESET_LOGS:
      return {
        ...state,
        timesLogged: logMetricsInitialState.timesLogged,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  message: messageReducer,
  logMetrics: logMetricReducer,
});

export default rootReducer;