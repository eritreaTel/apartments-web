const React = require('react');
const ScrollHelper = require('../../helpers/scroll_helper');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');

class SearchResult extends React.Component {

    state ={}

    componentDidMount() {
        const {pageNumber, searchInfo} = this.props;
        console.log('the page number');
        console.log(pageNumber);

        let nextPageSearchInfo = {...searchInfo,  pageNumber: pageNumber + 1};
        console.log(nextPageSearchInfo);

        //console.log(pageNumber + 1);
        this.state.scrollListener = ScrollHelper.installScroll(window, document.body, () => {
            Actions.getApartments(nextPageSearchInfo);
        });
    }

    componentWillUnmount() {
        ScrollHelper.uninstallScroll(window, this.state.scrollListener);
    }

    render() {
        const {apartments} = this.props;

        const AvailableApartments = apartments.map(apt => {
              return <ApartmentAvailable apartment={apt} key={apt.id} />
        });

        return (
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
}
module.exports = SearchResult;


