let clearMessagesTimeout;
const MESSAGE_LIFETIME = 4000;

module.exports = {
    clearErrorsAndMessages() {
        this.setStoreVal('errors', []);
        this.setStoreVal('messages', []);
    },

    async handleRequestError({error, defaultErrorMessage, override}) {
        let errorMessages;
        if (error && !override) {
            try {

                const text = await error.response.text();
                const parsed = JSON.parse(text);
                if (parsed.messages && parsed.messages.length) errorMessages = parsed.messages;
            } catch (e) {
                //add airbrake once it is figure out
            }
        } else {
            //add airbrake once it is figure out
        }

        errorMessages = errorMessages || [defaultErrorMessage];
        if (error && error.response && error.response.status >= 500 && error.response.status <= 599) {
            this.dispatch({type: 'setFailWhaleMessages', data: errorMessages});
            return;
        }

        this.dispatch({
            type: 'setErrorMessages', data: errorMessages
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
        console.log('beging setErrorMessage');
        data = ['invalid username and password'];
        console.log(data);
        console.log('end setErrorMessage');
        this.setStoreVal('errors', data);
        this.dispatch({type: 'scheduleClearErrorsAndMessages'});
    },

    setMessages(data) {
        const messages = this.getStoreVal('messages');
        this.setStoreVal('messages', messages.concat(data));
        this.dispatch({type: 'scheduleClearErrorsAndMessages'});
    }
};
