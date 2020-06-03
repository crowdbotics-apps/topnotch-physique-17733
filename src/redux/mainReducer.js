import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard159224Reducer from '../features/Dashboard159224/redux/reducers'
import SignIn159203Reducer from '../features/SignIn159203/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard159224: Dashboard159224Reducer,
SignIn159203: SignIn159203Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});