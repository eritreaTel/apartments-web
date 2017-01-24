const React = require('react');
const ScrollHelper = require('../../helpers/scroll_helper');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');

class SearchResult extends React.Component {

    state = {}
    componentDidMount() {
        const {pageNumber, searchInfo} = this.props;
        let nextPageSearchInfo = {...searchInfo,  pageNumber: pageNumber + 1};

        this.state.scrollListener = ScrollHelper.installScroll(window, document.body, () => {
            Actions.getApartments(nextPageSearchInfo);
        });
    }

    shouldComponentUpdate(){
        ScrollHelper.uninstallScroll(window, this.state.scrollListener);
        return true;
    }

    componentDidUpdate() {
        const {pageNumber, searchInfo} = this.props;
        let nextPageSearchInfo = {...searchInfo,  pageNumber: pageNumber + 1};
        this.state.scrollListener = ScrollHelper.installScroll(window, document.body, () => {
                Actions.getApartments(nextPageSearchInfo);
        });
    }


    componentWillUnmount() {
        ScrollHelper.uninstallScroll(window, this.state.scrollListener);
    }

    render() {
        const {apartments} = this.props;

        let availableApartments;
        if (apartments.length > 0 ) {
            availableApartments = apartments.map(apt => {
                                     return <ApartmentAvailable apartment={apt} key={apt.id} />
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
module.exports = SearchResult;


