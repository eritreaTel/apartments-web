const React = require('react');

const ApartmentMedium = require('../apartment/apartment_medium');
const withDataLoaded = require('../with_data_loaded');
const Actions = require('../../actions/actions');

class BestApartmentsSection extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    renderApts(apartments) {
        const bookAptClicked = (e) => {
          console.log("Book Apartment Clicked for apartmentId" );
        }

        const viewAptDetailsClicked = (e) => {
          console.log("View Aparment Details Clicked for apartmentId");
        }

        const styledApartments = apartments && apartments.map(apt => {
                return <div className="col-sm-4">
                          <ApartmentMedium apartment={apt} onViewDetails={viewAptDetailsClicked} onBookAptClicked={bookAptClicked}/>
                      </div>
        });

        return (
            <div className="row">
              {styledApartments}
            </div>
        );
}

    renderTitle() {
        return (
            <div className="mg-sec-title">
              <h2>Our Best Guest Houses</h2>
              <p>These best guest houses are chosen by our customers</p>
            </div>
        );
    }

    render() {

        const {store: {bestApartments}} = this.props;

        console.log('This is the propls');
        console.log(store);

        return (
            <div className="mg-best-rooms">
                <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              {this.renderTitle()}
                              {this.renderApts(bestApartments)}
                          </div>
                      </div>
                </div>
            </div>
        );
    }
}

const WithUserLoaded = withDataLoaded({
    WithData: BestApartmentsSection,
    WithoutData: () => (
        <div> loading ... </div>
    ),
    data: [
        {
            storeKeys: ['bestApartments'],
            loadDataFn: () => Actions.getBestApartments()
        }
    ]
});

module.exports = WithUserLoaded;