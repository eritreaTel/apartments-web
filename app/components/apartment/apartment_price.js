const React = require('react');
const ApplicationHelper = require('../../helpers/application_helper');

const ApartmentPrice = function(props) {
    return (
        <div>
            <div className="mg-single-room-price">
                <div className="mg-srp-inner-price-per-week">
                    {ApplicationHelper.formatCurrency(props.totalPrice)}<sup>.00</sup><span>/{props.daysCnt} days</span>
                </div>
            </div>
        </div>
    );
}


module.exports = ApartmentPrice;
