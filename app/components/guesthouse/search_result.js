const React = require('react');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');

import MDSpinner from "react-md-spinner";

class SearchResult extends React.Component {

    render() {
        const {apartments, isProcessing : {searchingApartments}} = this.props;

        let availableApartments;
        if (!searchingApartments) {  //If no searching - show contents, otherwise show spinner
            if (apartments.length > 0 ) {
                availableApartments = apartments.map(aptResponse => {
                                         return <ApartmentAvailable aptResponse={aptResponse} key={Math.random()} />
                                      });
            } else {
                availableApartments =
                            <div className="mg-avl-room">
                                <div className="row">
                                    <div className="col-sm-2"/>
                                    <div className="col-sm-8">
                                        <div className="alert alert-info" role="alert">
                                            <i className="fa fa-info-circle"></i>
                                            <strong> There are no guest houses matching the selected criterias. Feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</strong>
                                       </div>
                                    </div>
                                    <div className="col-sm-2"/>
                                </div>
                            </div>
            }
        } else {
                availableApartments =  <div className="mg-avl-room">
                                            <div className="row">
                                                <div className="col-sm-5"/>
                                                <div className="col-sm-2">
                                                    <MDSpinner />
                                                </div>
                                                <div className="col-sm-5"/>
                                            </div>
                                        </div>
        }

        return (
                    <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                          <div className="mg-available-rooms">
                                <h2 className="mg-sec-left-title">Available Apartments</h2>
                                <div className="mg-avl-rooms">
                                      {availableApartments}
                                </div>
                          </div>
                    </div>
              );
        }
}
module.exports = SearchResult;


