const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
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


const BookingStaging = function(props) {
    let {searching, personal, payment, confirmation} = ApartmentHelper.getReservationStatuses(props.activeStage);

    return(
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className={searching}>
                <Anchor onClick={()=>{}} aria-controls="select-room" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">1</span><span className="mg-bs-bar"></span>Select Apartment</Anchor>
            </li>
            <li role="presentation" className={personal}>
                <Anchor onClick={()=>{}} aria-controls="personal-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">2</span><span className="mg-bs-bar"></span>Personal Info</Anchor>
            </li>
            <li role="presentation" className={payment}>
                <Anchor onClick={()=>{}} aria-controls="payment" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">3</span><span className="mg-bs-bar"></span>Payment</Anchor>
            </li>
            <li role="presentation" className={confirmation}>
                <Anchor onClick={()=>{}} aria-controls="thank-you" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">4</span>Thank You</Anchor>
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

    render() {
        const {store} = this.props;
        const {store : {user, pageNumber, apartments, apartment, bookingStage}} = this.props;
        console.log('page number inside guestHouse page component is : ' + pageNumber + ' and stage is '+ bookingStage.activeStage );
        let section ;

        switch (bookingStage.activeStage) {
            case 'search':
                section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                <SearchApartments searchInfo={bookingStage.searchInfo} />
                                <SearchResult apartments = {apartments} pageNumber={pageNumber} searchInfo={bookingStage.searchInfo}/>
                            </div>
                break;
            case 'personal' :
                section =   <div role="tabpanel" className="tab-pane in active" id="personal-info">
                                <PersonalInfo apartment={apartment} user={user} bookingStage={bookingStage} />
                            </div>
                break;
            case 'payment' :
                section =   <div role="tabpanel" className="tab-pane in active" id="payment">
                                <PaymentInfo apartment={apartment} bookingStage={bookingStage} />
                            </div>
                break;
            case 'confirmation' :
                section =  <ReservationConfirmation apartment={apartment} bookingStage={bookingStage} />
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
                        <SvgImage name="dark-sun"/> Loading
                    </div>
                </div>
            </GuestHouseBody>
        ),
        data: [
            {
                storeKeys: ['apartments'],
                loadDataFn: ({bookingStage : {searchInfo}}) => Actions.getApartments(searchInfo)
            }
        ]
});

module.exports = WithUserLoaded;
