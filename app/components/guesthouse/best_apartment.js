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
    return (
        <div className="mg-best-rooms">
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      {this.renderTitle()}
                      {this.renderApts(this.props.apartments)}
                      </div>
                  </div>
            </div>
        </div>
    );
  }
}

function getDefaultProps() {
  let props = {
    apartments: [
      {
        "id": 1,
        "user_id": 1,
        "guest_house_id" : 1,
        "title" : "Super Deluxe",
        "best_photo" : "images/room-1.png",
        "total_count" : 15,
        "free_count" : 10,
        "bed" : 1,
        "bath" : 1,
        "price_per_day" : 40,
        "price_per_week" :  180,
        "price_per_month" : 600,
        "street_address" : "477 Nsambia St",
        "city" : "Kampala",
        "country" : "Uganda",
        "is_available" : true,
        "short_description" : "This is a deluxe aparment in Kabala gala, 7 kms from city center.",
        "long_description" : "",
        "star_rating" : "3.75",
        "created_at": "2017-10-29 10:33:10",
        "updated_at": "2017-10-29 10:33:10",
        "deleted_at": null
      },
      {
        "id": 2,
        "user_id": 2,
        "guest_house_id" : 2,
        "title" : "Deluxe",
        "best_photo" : "images/room-2.png",
        "total_count" : 25,
        "free_count" : 5,
        "bed" : 1,
        "bath" : 1,
        "price_per_day" : 50,
        "price_per_week" :  200,
        "price_per_month" : 750,
        "street_address" : "54 Myenga St",
        "city" : "Kampala",
        "country" : "Uganda",
        "is_available" : true,
        "short_description" : "Super deluxe apartment in Myenga, 10 kms from city center.",
        "long_description" : "",
        "star_rating" : "4.00",
        "created_at": "2017-10-29 10:33:10",
        "updated_at": "2017-10-29 10:33:10",
        "deleted_at": null
      },
      {
        "id": 3,
        "user_id": 3,
        "guest_house_id" : 3,
        "title" : "Super Duper Deluxe",
        "best_photo" : "images/room-3.png",
        "total_count" : 5,
        "free_count" : 3,
        "bed" : 1,
        "bath" : 1,
        "price_per_day" : 30,
        "price_per_week" :  150,
        "price_per_month" : 500,
        "street_address" : "123 Kasanga St",
        "city" : "Kampala",
        "country" : "Uganda",
        "is_available" : true,
        "short_description" : "Super duper deluxe apartment in Kololo, 4 kms from city center.",
        "long_description" : "",
        "star_rating" : "5.00",
        "created_at": "2017-10-29 10:33:10",
        "updated_at": "2017-10-29 10:33:10",
        "deleted_at": null
      }
    ]
  };

  return props;
}

BestApartments.defaultProps = getDefaultProps();

module.exports = BestApartments;
