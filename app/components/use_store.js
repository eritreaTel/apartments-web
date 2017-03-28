const config = require('../../config/config');
const Dispatcher = require('../dispatchers/dispatcher');
const React = require('react');

module.exports = {
    useStore(Component) {
        class UseStore extends React.Component {
            constructor(props) {
                super(props);

                const routes = require('../../config/routes');
                const router = new (require('director').Router)(routes);

                Dispatcher.updateStore = function (callback) {
                    this.setState({store: callback(this.state.store)});
                }.bind(this);

                Dispatcher.getStore = function () {
                    return this.state.store;
                }.bind(this);

                Dispatcher.router = router;

                this.state = {
                    router,
                    store: {
                        user: null,
                        apartments : null,
                        filteredApartments : null,
                        apartment : null,
                        bestApartments : null,
                        apartmentReviews : null,
                        reservationConfirmations : null,
                        searchCriteria : null,
                        bookingStage : {
                            activeStage : null,
                            searchInfo  : null,
                            additional  : {},
                            personal    : {},
                            payment     : {
                                'payFull'    : true,
                                'payLater'   : false,
                                'payPartial' : false,
                                'number'     : '',
                                'exp_month'  : '',
                                'exp_year'   : ''
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
                            updateUserInfo : null,
                            seekerUser : {
                                'activeLink' : 'booking'
                            }
                        },
                        blogs : null,
                        blog : null,
                        contactUs : null,
                        blogComments : null,
                        blogMetaData : null,
                        recentNews : null,
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
                            'updatingUser' : false,
                            'searchingBlogs' : false,
                            'loadingBlog' : false,
                            'searchingApartments' : false
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
