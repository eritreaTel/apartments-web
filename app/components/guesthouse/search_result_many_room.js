const React = require('react');
const ScrollHelper = require('../../helpers/scroll_helper');
const ComboApartment = require('../apartment/combo_apartment');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');

class SearchResultManyRoom extends React.Component {

    render() {
        const {apartments} = this.props;

        let availableApartments;
        if (apartments.length > 0 ) {
            availableApartments = apartments.map(aptResponse => {
                                     return <ComboApartment aptResponse={aptResponse} key={Math.random()}/>
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
module.exports = SearchResultManyRoom;


