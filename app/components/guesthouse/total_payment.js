const React = require('react');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const CurrencyFormatter = require('currency-formatter');

class  TotalPayment extends React.Component {

    render() {
        let {apartment, bookingStage : {additional, payment}} = this.props;

        let totalAmount, partialPay, currentPayment = 0, remainingAmount = 0, partialPayCss='mg-cart-total hide';
        totalAmount = PricingHelper.getTotalPrice(apartment, additional);
        partialPay = (payment && payment.payment_amount && payment.payment_amount != totalAmount ) ? true : false;

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
                <div className="mg-cart-total">
                    <strong>Total: </strong>
                    <span>{totalAmount}</span>
                </div>
                <div className={partialPayCss}>
                    <strong>Remaining : </strong>
                    <span>{remainingAmount}</span>
                </div>
                <div className={partialPayCss}>
                    <strong>Current Payment: </strong>
                    <span>{currentPayment}</span>
                </div>
            </div>
        );
    }


}

module.exports = TotalPayment;
