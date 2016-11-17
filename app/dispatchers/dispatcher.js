const PageDispatcher      = require('./page_dispatcher');
const ApartmentDispatcher = require('./apartment_dispatcher');
const BlogDispatcher      = require('./blog_dispatcher');
const MessageDispatcher   = require('./message_dispatcher');
const UserDispatcher      = require('./user_dispatcher');
const DebugHelper         = require('../helpers/debug_helper');

const Dispatcher = {
    dispatch(action) {
        DebugHelper.trackAction(action);

        const {type, data} = action;
        const dispatchers = [
            PageDispatcher,
            ApartmentDispatcher,
            BlogDispatcher,
            MessageDispatcher,
            UserDispatcher
        ];

        if (type === 'noop') {
            return null;
        }

        const dispatcher = dispatchers.find(dispatcherPotential => dispatcherPotential.hasOwnProperty(type));

        if (dispatcher) {
            return this::dispatcher[type](data);
        }
        /* eslint-disable no-console */
        console.error(`No handler for '${type}'`);
        /* eslint-enable no-console */
    },

    setStoreVal(key, val) {
        this.updateStore(store => {
            store[key] = val;
            return store;
        });
    },

    getStoreVal(key) {
        const store = this.getStore();
        return store[key];
    },

    mergeStoreVal(key, val) {
        this.updateStore(store => {
            store[key] = {...store[key], ...val};
            return store;
        });
    },

    pushStoreVal(key, val) {
        this.updateStore(store => {
            store[key] = [...store[key], val];
            return store;
        });
    },

    concatStoreVal(key, val){
        this.updateStore(store => {
            if (Array.isArray(store[key]) && Array.isArray(val)) {
                store[key] = store[key].concat(val);
            }
            return store;
        });
    },

    acquireLock(key){
        const currentLocks = this.getStoreVal('locks');
        if (!currentLocks[key]) {
            this.mergeStoreVal('locks', {[key]: true});
            return true;
        }
        return false;
    },

    releaseLock(key){
        this.mergeStoreVal('locks', {[key]: false});
    }
};

module.exports = Dispatcher;
