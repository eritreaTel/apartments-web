const config = require('../../config/config');
const Dispatcher = require('../dispatchers/dispatcher');
const React = require('react');
const DebugHelper = require('../helpers/debug_helper');

module.exports = {
    useStore(Component) {
        class UseStore extends React.Component {
            constructor(props) {
                super(props);

                const routes = require('../../config/routes');
                const router = new (require('director').Router)(routes);

                Dispatcher.updateStore = function (callback) {
                    this.setState({store: callback(this.state.store)});
                    DebugHelper.trackStore(this.state.store);
                }.bind(this);

                Dispatcher.getStore = function () {
                    return this.state.store;
                }.bind(this);

                Dispatcher.router = router;

                this.state = {
                    router,
                    store: {
                        user: null,
                        apartments : [],
                        bestApartments : [],
                        apartmentReviews : [],
                        searchCriteria : null,
                        bookingStage : {
                            activeStage : null,
                            searchInfo  : null,
                            additional  : {},
                            personal    : {},
                            payment     : {
                                'payFull' : true,
                                'payLater' : false,
                                'payPartial' : false
                            },
                            confirmation : {}
                        },
                        resetPassword: {
                            stage: null,
                            email: null,
                            resetCode : null
                        },
                        userServices : {
                            activeSignInSection: 'signIn',
                            signUpData : null,
                            updateUserInfo : null
                        },
                        blogs : [],
                        blog : null,
                        contactUs : null,
                        blogComments : [],
                        blogMetaData : [],
                        recentNews : [],
                        errors: [],
                        lastEvent: null,
                        locks: {},
                        message: null,
                        view: {},
                        pageNumber: null,
                        acceptToS : false,
                        isProcessing : {
                            'newsLetterSubscription' : false,
                            'reviewAnApartment' : false,
                            'processingPayment' : false,
                            'creatingContactUs' : false,
                            'creatingBlogComment' : false,
                            'authenticatingUser' : false,
                            'sendingResetPassword' : false,
                            'processingResetCode' : false,
                            'updatingPassword' : false,
                            'creatingUser' : false,
                            'updatingUser' : false
                        }
                    }
                };
            }

            render() {
                return (<Component {...this.state} {...this.props}/>);
            }
        }

        UseStore.defaultProps = {config};

        return UseStore;
    }
};
