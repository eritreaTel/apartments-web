const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Amenities = require('./amenties');
const Actions = require('../../actions/actions');
const ActionWithLoading = require('../shared/action_with_loading');
const {assetPath} = require('../../helpers/asset_helper');

class ApartmentAvailable extends React.Component {

    render() {
        const {apartment } = this.props;
        return (
            <div className="mg-avl-room">
                <div className="row">
                    <div className="col-sm-5">
                        <Anchor><img src = {assetPath(apartment.best_photo)} alt="" className="img-responsive"/></Anchor>
                    </div>
                    <div className="col-sm-7">
                        <h3 className="mg-avl-room-title"><Anchor onClick={()=>{Actions.setRoute('apartment/'+ apartment.id);}}>{apartment.title}</Anchor> <span>{ApplicationHelper.formatCurrency(apartment.price_per_day)}<sup>.99</sup>/Night</span></h3>
                        <p>{apartment.medium_description}</p>
                        <Amenities amenities={apartment.amenities} outerDivClass="row mg-room-fecilities" innerDivClass="col-sm-6" />

                        <Anchor onClick={()=>{Actions.setRoute('apartment/'+ apartment.id);}} className="btn btn-dark ">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                        <Anchor onClick={()=>{}} className="btn btn-main pull-right">Book Now</Anchor>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentAvailable;
