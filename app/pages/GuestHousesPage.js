const React = require('react');
const ApartmentAvailable = require('../components/apartment/apartment_available');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
const PersonalInfo   = require('../components/guesthouse/personal_info');
const PaymentInfo = require('../components/guesthouse/payment_info');
const PageTitle = require('../components/shared/pageTitle');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const Anchor = require('../components/shared/anchor');



const BookingStaging = function(props) {
    return(
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
                <Anchor aria-controls="select-room" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">1</span><span className="mg-bs-bar"></span>Select Room</Anchor>
            </li>
            <li role="presentation">
                <Anchor aria-controls="personal-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">2</span><span className="mg-bs-bar"></span>Personal Info</Anchor>
            </li>
            <li role="presentation">
                <Anchor aria-controls="payment" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">3</span><span className="mg-bs-bar"></span>Payment</Anchor>
            </li>
            <li role="presentation">
                <Anchor aria-controls="thank-you" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">4</span>Thank You</Anchor>
            </li>
        </ul>
    );
}

const SearchApartments = function (props) {
    return (
        <div className="mg-saerch-room">
            <SearchApartment parentClassName="mg-book-now mt80" />
        </div>
    );
}

const AvailableApartments = function(props) {
    const AvailableApartments = props.apartments.map(apt => {
        return <ApartmentAvailable apartment={apt} key={apt.id} />
    });

    return(
        <div role="tabpanel" className="tab-pane fade in active" id="select-room">
            <div className="mg-available-rooms">
                <h2 className="mg-sec-left-title">Available Apartments</h2>
                <div className="mg-avl-rooms">
                    {AvailableApartments}
                </div>
            </div>
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
                                <BookingStaging />

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
    render() {
        const {store} = this.props;
        const {apartments, apartment, bookingStage: {activeStage}} = store;
        let section ;
            switch (activeStage) {
                case 'search':
                    section =   <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                    <SearchApartments />
                                    <AvailableApartments {...{store}} />
                                </div>
                    break;
                case 'personal' :
                    section =   <div role="tabpanel" className="tab-pane in active" id="personal-info">
                                    <PersonalInfo {...{store}} />
                                </div>
                    break;
                case 'payment' :
                    section =   <div role="tabpanel" className="tab-pane in active" id="payment">
                                    <PaymentInfo {...{store}} />
                                </div>
                    break;
                case 'thankyou' :
                    break;

                default:
                    section = <AvailableApartments apartments = {apartments} />
            }
        return ( <GuestHouseBody> {section} </GuestHouseBody> );
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
                loadDataFn: ({bookingStage : {searchingInfo}}) => Actions.getApartments(searchingInfo)
            }
        ]
});

module.exports = WithUserLoaded;
