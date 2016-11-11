const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Actions = require('../../actions/actions');

const onBookNowClicked = function (apartmentId) {
    Actions.bookApartmentClicked({apartmentId});
    Actions.setRoute('/guest-houses');

}

class ApartmentMedium extends React.Component {

    render() {
        const {apartment, onViewDetails, onBookAptClicked } = this.props;

        return (
            <figure className="mg-room">
                <img src={apartment.best_photo} alt="img11" className="img-responsive"/>
                <figcaption>
                    <h2>{apartment.title}</h2>
                    <div className="mg-room-rating"><i className="fa fa-star"></i> {apartment.star_rating}</div>
                    <div className="mg-room-price">{ApplicationHelper.formatCurrency(apartment.price_per_day)}<sup>.00/Night</sup></div>
                    <p>{apartment.short_description}</p>
                    <Anchor onClick={onViewDetails} className="btn btn-link">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                    <Anchor onClick={() => {onBookNowClicked(apartment.id)}} className="btn btn-main">Book</Anchor>
                </figcaption>
            </figure>
        );
    }
}

module.exports = ApartmentMedium;
