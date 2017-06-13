const React = require('react');
const BookingStage = require('./booking_stage');
const PageTitle = require('../../components/shared/pageTitle');

class MainBody extends React.Component {
    render() {
        return (
            <div>
                <PageTitle parentClassName="mg-page-title-space parallax"/>
                <div className="mg-page">
                    <div className="mg-search-results container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mg-booking-form">
                                    <BookingStage activeStage={this.props.activeStage} />

                                    <div className="tab-content">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


module.exports = MainBody;


