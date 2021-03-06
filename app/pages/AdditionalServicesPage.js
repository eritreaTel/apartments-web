const React = require('react');
const SearchApartment = require('../components/hotel/search_guesthouses');
const AdditionalInfo = require('../components/hotel/additional_info');
const SearchResult   = require('../components/hotel/search_result');
const HotelBody   = require('../components/hotel/main_body');
const withDataLoaded = require('../components/with_data_loaded');
const Actions = require('../actions/actions');
const ApartmentHelper = require('../helpers/apartment_helper');
import MDSpinner from "react-md-spinner";


const SearchApartments = function (props) {
    return (
        <div className="mg-saerch-room">
            <SearchApartment searchInfo={props.searchInfo} parentClassName="mg-book-now mt80" />
        </div>
    );
}

class AdditionalServicesPage extends React.Component {

    state = {};

    componentWillMount() {
        Actions.getAuthenticatedUser();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {store} = this.props;
        const {store : {searchResultPage, user, pageNumber, apartments, filteredApartments,  apartment, bookingStage, acceptToS, isProcessing}} = this.props;
        let section ;

        switch (bookingStage.activeStage) {
            case 'additional':
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <AdditionalInfo bookingStage={bookingStage} apartmentResponse={apartment} isProcessing={isProcessing} />
                            </div>
                break;
            default:
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <SearchApartments searchInfo={bookingStage.searchInfo} />
                                <SearchResult filteredApartments={filteredApartments} isProcessing={isProcessing} apartments = {apartments} pageNumber={pageNumber} bookingStage={bookingStage}/>
                            </div>
        }
        return ( <HotelBody activeStage={bookingStage.activeStage}> {section} </HotelBody> );
    }
};

const WithUserLoaded = withDataLoaded({
        WithData: AdditionalServicesPage,
        WithoutData: () => (
            <HotelBody >
                <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                    <SearchApartments />
                    <div className="load-spin">
                        <MDSpinner />
                    </div>
                </div>
            </HotelBody>
        ),
        data: [
            {
                storeKeys: ['apartments'],
                loadDataFn: (store) => {
                    let searchInfo;
                    let {bookingStage} = store;
                    searchInfo = bookingStage.searchInfo;
                    if (searchInfo == null) {
                        searchInfo = ApartmentHelper.getDefaultSearchDates();
                        Actions.persistSearchInfo(searchInfo);
                    }
                    Actions.getApartments(searchInfo);
                },
                checkDataFn: ({apartments}) => apartments != null
            }
        ]
});

module.exports = WithUserLoaded;
