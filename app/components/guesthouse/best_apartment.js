const React = require('react');

const ApartmentMedium = require('../apartment/apartment_medium');

class BestApartments extends React.Component {

  renderApts(apartments) {
        const bookAptClicked = (e) => {
          console.log("Book Apartment Clicked for apartmentId" );
        }

        const viewAptDetailsClicked = (e) => {
          console.log("View Aparment Details Clicked for apartmentId");
        }

        const styledApartments = apartments.map(apt => {
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
        const {bestApartments} = this.props;
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

module.exports = BestApartments;
