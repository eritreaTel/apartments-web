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
                        guestHouses: [],
                        apartments : [],
                        bestApartments : [],
                        apartmentFeatures : [],
                        apartmentReviews : [],
                        apartmentBookings : [],
                        userSearches : [],
                        userPreferences : [],
                        blogs : [],
                        documents : [],
                        blogComments : [],
                        errors: [],
                        lastEvent: null,
                        locks: {},
                        messages: [],
                        view: {},
                        pageNumber: null
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
