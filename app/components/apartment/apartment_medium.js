const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Actions = require('../../actions/actions');

const bookBestApartmentClicked = function (apartmentId) {
    Actions.bookBestApartmentClicked({apartmentId});
    Actions.setRoute('/guest-houses');
}

const viewBestApartmentClicked = function (apartmentId) {
    Actions.viewBestApartmentClicked({apartmentId});
    Actions.setRoute('/apartment/' + apartmentId);
}

class ApartmentMedium extends React.Component {

    render() {
        const {apartment} = this.props;

        return (
            <figure className="mg-room">
                <img src={apartment.best_photo} alt="img11" className="img-responsive"/>
                <figcaption>
                    <h2>{apartment.title}</h2>
                    <div className="mg-room-rating"><i className="fa fa-star"></i> {apartment.star_rating}</div>
                    <div className="mg-room-price">{ApplicationHelper.formatCurrency(apartment.price_per_day)}<sup>.00/Night</sup></div>
                    <p>{apartment.short_description}</p>
                    <Anchor onClick={() => {viewBestApartmentClicked(apartment.id);}} className="btn btn-link">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                    <Anchor onClick={() =>{bookBestApartmentClicked(apartment.id);}} className="btn btn-main">Book</Anchor>
                </figcaption>
            </figure>
        );
    }
}

module.exports = ApartmentMedium;
