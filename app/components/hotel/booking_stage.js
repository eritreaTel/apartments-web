const React = require('react');
const ApartmentHelper = require('../../helpers/apartment_helper');
const Anchor = require('../../components/shared/anchor');

class BookingStage extends React.Component {
    render() {
        let {searching, additional, personal, confirmation} = ApartmentHelper.getReservationStatuses(this.props.activeStage);

        return(
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className={searching}>
                        <Anchor className="inactiveLink" aria-controls="select-room" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">1</span><span className="mg-bs-bar"></span>Select Accommodation</Anchor>
                    </li>

                    <li role="presentation" className={additional}>
                        <Anchor className="inactiveLink" aria-controls="additional-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">2</span><span className="mg-bs-bar"></span>Additional Services</Anchor>
                    </li>

                    <li role="presentation" className={personal}>
                        <Anchor className="inactiveLink" aria-controls="personal-info" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">3</span><span className="mg-bs-bar"></span>Make Reservation</Anchor>
                    </li>

                    <li role="presentation" className={confirmation}>
                        <Anchor className="inactiveLink" aria-controls="thank-you" role="tab" data-toggle="tab"><span className="mg-bs-tab-num">5</span>Confirmation</Anchor>
                    </li>
                </ul>
            );
        }
}

module.exports = BookingStage;


