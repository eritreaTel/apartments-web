let clearMessagesTimeout;
const MESSAGE_LIFETIME = 4000;

module.exports = {
    clearErrorsAndMessages() {
        this.setStoreVal('errors', []);
        this.setStoreVal('message', null);
    },

    async handleRequestError({error, defaultErrorMessage, override}) {
        let errorMessages;
        if (error && !override) {
            try {
                const text = await error.response.text();
                const parsed = JSON.parse(text);
                if (parsed.messages && parsed.messages.length) {
                    errorMessages = parsed.messages;
                }
            } catch (e) {
                //add airbrake once it is figure out
            }
        } else {
            //add airbrake once it is figure out
        }

        errorMessages = errorMessages || [defaultErrorMessage];

        this.dispatch({
            type: 'setErrorMessages', data: {errors: errorMessages}
        });
    },

    scheduleClearErrorsAndMessages() {
        clearTimeout(clearMessagesTimeout);

        clearMessagesTimeout = setTimeout(() => {
            this.dispatch({type: 'clearErrorsAndMessages'});
        }, MESSAGE_LIFETIME);
    },

    async setFailWhaleMessages(data) {
        this.setStoreVal('failWhaleMessages', data);
        this.dispatch({type: 'setRoute', data: '/error'});
    },

    setErrorMessages(data) {
        let {errors} = data;
        this.setStoreVal('errors', errors);
        this.dispatch({type: 'scheduleClearErrorsAndMessages'});
    },

    setMessages(data) {
        const messages = this.getStoreVal('messages');
        this.setStoreVal('messages', messages.concat(data));
        this.dispatch({type: 'scheduleClearErrorsAndMessages'});
    },

    prepareResponse(){
        let response;
        const errors = this.getStoreVal('errors');
        if (errors && errors.length >0) {
            response = {'status' : 'fail', 'error' : errors.pop()}
        } else {
            response = {'status' : 'success'}
        }
        return response;
    }


};
