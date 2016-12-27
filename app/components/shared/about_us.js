const React = require('react');
const Header = require('../shared/header');


class AboutUs extends React.Component {

    renderTitle() {
        return (
            <div className="col-md-12">
                <h2 className="mg-sec-left-title">About GuestHouses -Uganda</h2>
                <p>UgandaBooking is founded by ArchSoftwareSolutions LLC. ArchSoftware solutions is based in San Francisco, USA and Kampala Uganda. Our mission is to give visibility to many great guest houses in Uganda to the outside world. Uganda is a beautiful country and it has many great guest houses that lack internet visibility. Our company’s top mission is to promote tourism in Uganda by making  it easy to reserve guest house in Uganda. One of the first things a tourist does when traveling to a country is finding accommodation. We want to make this process as pleasant as possible while making sure the tourist gets the best deal on the market. We want to tourists to get the best out of their stay. Staying in a guest house is much better than staying in a hotel as it is less boring and it has home feeling. TODO-Amanuel, make this good.</p>
            </div>
        );
    }

    render() {
        return (
            <div className="mg-about parallax">
                <div className="container">
                    <div className="row">
                        {this.renderTitle()}

                    </div>
                </div>
            </div>
        );
    }
};

module.exports = AboutUs;