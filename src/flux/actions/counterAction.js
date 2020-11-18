import dispatcher from "../appDispatcher";
import actionTypes from './actionTypes';

export function incrementCounter() {
    dispatcher.dispatch({
        actionType: actionTypes.INCREMENT_COUNTER
    })    
    
}