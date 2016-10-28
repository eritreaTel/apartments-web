const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Amenities = require('./amenties');
const Actions = require('../../actions/actions');

class ApartmentAvailable extends React.Component {

    onSelectRoomClicked() {
        console.log('Select this room clicked');
    }

    onViewDetailsClicked = () => {
        //Actions.setRoute(`/apartment/${proposal.id}`);
        Actions.setRoute(`/apartment`);
    }

    render() {
        const {apartment } = this.props;
        return (
            <div className="mg-avl-room">
                <div className="row">
                    <div className="col-sm-5">
                        <a href="#"><img src={apartment.best_photo} alt="" className="img-responsive"/></a>
                    </div>
                    <div className="col-sm-7">
                        <h3 className="mg-avl-room-title"><Anchor>Super Deluxe</Anchor> <span>{ApplicationHelper.formatCurrency(apartment.price_per_day)}<sup>.99</sup>/Night</span></h3>
                        <p>{apartment.medium_description}</p>
                        <Amenities amenities={apartment.amenities} outerDivClass="row mg-room-fecilities" innerDivClass="col-sm-6" />
                        <Anchor onClick={this.onSelectRoomClicked()} className="btn btn-main btn-next-tab">Select This Room</Anchor>
                        <Anchor onClick={this.onViewDetailsClicked} className="btn btn-link">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentAvailable;
