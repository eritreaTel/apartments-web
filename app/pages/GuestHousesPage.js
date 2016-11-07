const React = require('react');
const ApartmentAvailable = require('../components/apartment/apartment_available');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
const PersonalInfo   = require('../components/guesthouse/personal_info');
const PageTitle = require('../components/shared/pageTitle');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');



const BookingStaging = function(props) {
    return(
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
                <a href="#select-room" aria-controls="select-room" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">1</span><span className="mg-bs-bar"></span>Select Room</a>
            </li>
            <li role="presentation">
                <a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">2</span><span className="mg-bs-bar"></span>Personal Info</a>
            </li>
            <li role="presentation">
                <a href="#payment" aria-controls="payment" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">3</span><span className="mg-bs-bar"></span>Payment</a>
            </li>
            <li role="presentation">
                <a href="#thank-you" aria-controls="thank-you" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">4</span>Thank You</a>
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
        return <ApartmentAvailable apartment={apt} />
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
                                    <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                                        <SearchApartments />
                                        {props.children}
                                    </div>
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
        const {store : {apartments}} = this.props;
        return (
            <GuestHouseBody>
                <AvailableApartments apartments = {apartments} />
            </GuestHouseBody>
        );
    }
};

const WithUserLoaded = withDataLoaded({
        WithData: GuestHousesPage,
        WithoutData: () => (
            <GuestHouseBody >
                <div className="load-spin">
                    <SvgImage name="dark-sun"/> Loading
                </div>
            </GuestHouseBody>
        ),
        data: [
            {
                storeKeys: ['apartments'],
                loadDataFn: () => Actions.getApartments()
            }
        ]
});

module.exports = WithUserLoaded;
