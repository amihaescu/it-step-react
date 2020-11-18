import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher'
import EventEmitter from 'events';

const CHANGE_EVENT = "change";
let counter = 0;

class CounterStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getCounter() {
        return counter;
    }
}

const counterStore = new CounterStore();

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.INCREMENT_COUNTER:
            counter++;
            counterStore.emitChange();
            break;
        default:
            break;
    }
});

export default counterStore;