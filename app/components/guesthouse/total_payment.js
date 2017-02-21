const React = require('react');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const CurrencyFormatter = require('currency-formatter');

class  TotalPayment extends React.Component {

    render() {
        let {apartmentResponse, bookingStage : {additional, payment}, currentPayCaption} = this.props;

        let totalAmount, partialPay, currentPayment = 0, remainingAmount = 0, partialPayCss='mg-cart-total hide';
        totalAmount = PricingHelper.getTotalComboPrice(apartmentResponse.totalPrice, additional);
        partialPay = (payment && payment.payment_amount != undefined && payment.payment_amount != totalAmount ) ? true : false;

        if (partialPay) {
            currentPayment  = PricingHelper.getCurrentPayment(totalAmount, payment.payment_amount);
            remainingAmount = PricingHelper.getRemainingAmount(totalAmount, payment.payment_amount);
            partialPayCss = 'mg-cart-total show';
        }

        //Just formatting the totals
        totalAmount = CurrencyFormatter.format(totalAmount, { code: 'USD' });
        remainingAmount = CurrencyFormatter.format(remainingAmount, { code: 'USD' });
        currentPayment = CurrencyFormatter.format(currentPayment, { code: 'USD' });


        return (
            <div className="margin-top-30">
                <div className={partialPayCss}>
                    <strong>{currentPayCaption}: </strong>
                    <span>{currentPayment}</span>
                </div>
                <div className={partialPayCss}>
                    <strong>Remaining: </strong>
                    <span>{remainingAmount}</span>
                </div>
                <div className="mg-widget-cart-row"> </div>
                <div className="mg-cart-total">
                    <strong>Total Amount: </strong>
                    <span>{totalAmount}</span>
                </div>
            </div>
        );
    }


}

module.exports = TotalPayment;
