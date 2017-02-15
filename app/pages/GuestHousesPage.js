const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
const AdditionalInfo = require('../components/guesthouse/additional_info');
const PersonalInfo   = require('../components/guesthouse/personal_info');
const SearchResult   = require('../components/guesthouse/search_result');
const PaymentInfo   = require('../components/guesthouse/payment_info');
const ReservationConfirmation      = require('../components/guesthouse/reservation_confirmation');
const PageTitle = require('../components/shared/pageTitle');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const Anchor = require('../components/shared/anchor');
const ApartmentHelper = require('../helpers/apartment_helper');
const DateHelper = require('../helpers/date_helper');
import MDSpinner from "react-md-spinner";


const BookingStaging = function(props) {
    let {searching, additional, personal, confirmation} = ApartmentHelper.getReservationStatuses(props.activeStage);

    return(
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className={searching}>
                <Anchor className="inactiveLink" aria-controls="select-room" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">1</span><span className="mg-bs-bar"></span>Select Apartment</Anchor>
            </li>

            <li role="presentation" className={additional}>
                <Anchor className="inactiveLink" aria-controls="additional-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">2</span><span className="mg-bs-bar"></span>Additional Services</Anchor>
            </li>

            <li role="presentation" className={personal}>
                <Anchor className="inactiveLink" aria-controls="personal-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">3</span><span className="mg-bs-bar"></span>Make Reservation</Anchor>
            </li>

            <li role="presentation" className={confirmation}>
                <Anchor className="inactiveLink" aria-controls="thank-you" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">5</span>Confirmation</Anchor>
            </li>
        </ul>
    );
}

const SearchApartments = function (props) {
    return (
        <div className="mg-saerch-room">
            <SearchApartment searchInfo={props.searchInfo} parentClassName="mg-book-now mt80" />
        </div>
    );
}

const GuestHouseBody = function(props) {
    return (
        <div>
            <PageTitle parentClassName="mg-page-title-space parallax"/>
            <div className="mg-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mg-booking-form">
                                <BookingStaging activeStage={props.activeStage} />

                                <div className="tab-content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



class GuestHousesPage extends React.Component {

    state = {};

    componentWillMount() {
        Actions.getAuthenticatedUser();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {store} = this.props;
        const {store : {user, pageNumber, apartments, apartment, bookingStage, acceptToS, isProcessing}} = this.props;
        let section ;
        
        switch (bookingStage.activeStage) {
            case 'search':
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <SearchApartments searchInfo={bookingStage.searchInfo} />
                                <SearchResult apartments = {apartments} pageNumber={pageNumber} searchInfo={bookingStage.searchInfo}/>
                            </div>
                break;
            case 'additional':
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <AdditionalInfo bookingStage={bookingStage} apartment={apartment} isProcessing={isProcessing} />
                            </div>
                break;
            case 'personal' :
                section =   <div role="tabpanel" className="tab-pane in active" id="personal-info">
                                <PersonalInfo acceptToS={acceptToS} apartment={apartment} user={user} bookingStage={bookingStage} isProcessing={isProcessing} />
                            </div>
                break;
            case 'payment' :
                section =   <div role="tabpanel" className="tab-pane in active" id="payment">
                                <PaymentInfo apartment={apartment} bookingStage={bookingStage} user={user} isProcessing={isProcessing} />
                            </div>
                break;
            case 'confirmation' :
                section =  <ReservationConfirmation apartment={apartment} bookingStage={bookingStage} user={user} />
                break;
            default:
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <SearchApartments searchInfo={bookingStage.searchInfo} />
                                <SearchResult apartments = {apartments} pageNumber={pageNumber} searchInfo={bookingStage.searchInfo}/>
                            </div>
        }
        return ( <GuestHouseBody activeStage={bookingStage.activeStage}> {section} </GuestHouseBody> );
    }
};

const WithUserLoaded = withDataLoaded({
        WithData: GuestHousesPage,
        WithoutData: () => (
            <GuestHouseBody >
                <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                    <SearchApartments />
                    <div className="load-spin">
                        <MDSpinner />
                    </div>
                </div>
            </GuestHouseBody>
        ),
        data: [
            {
                storeKeys: ['apartments'],
                loadDataFn: (store) => {
                    let searchInfo;
                    let {bookingStage} = store;
                    searchInfo = bookingStage.searchInfo;
                    if (searchInfo == null) {
                        searchInfo = {
                            'checkInDate'   : DateHelper.getOneWeeksFromNow(),
                            'checkOutDate'  : DateHelper.getThreeWeeksFromNow(),
                            'children' : 0,
                            "adult" : 2,
                            "room" : 1
                        };
                        Actions.persistSearchInfo(searchInfo);
                    }
                    Actions.getApartments(searchInfo);
                },
                checkDataFn: ({apartments}) => apartments != null
            }
        ]
});

module.exports = WithUserLoaded;
