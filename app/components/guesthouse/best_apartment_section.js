const React = require('react');

const ApartmentMedium = require('../apartment/apartment_medium');
const withDataLoaded = require('../with_data_loaded');
const Actions = require('../../actions/actions');

const Section = function(props) {
    console.log('stateless component');
    console.log(props.bestApartments);
    return (
        <div className="mg-best-rooms">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <TitleSection />
                        <ApartmentsSection bestApartments = {props.bestApartments} />

                    </div>
                </div>
            </div>
        </div>
    );
}

const TitleSection  = function() {
        return (
            <div className="mg-sec-title">
                <h2>Our Best Guest Houses</h2>
                <p>These best guest houses are chosen by our customers</p>
            </div>
        );
}

const  ApartmentsSection = function(props) {
    const styledApartments = props.bestApartments && props.bestApartments.map(apt => {
        return  <div className="col-sm-4">
                    <ApartmentMedium apartment={apt} onViewDetails={() => {}} onBookAptClicked={() => {}}/>
                </div>
    });

    return (
        <div className="row">
            {styledApartments}
        </div>
    );
}

class BestApartmentsSection extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    render() {

        const {store: {bestApartments}} = this.props;

        return (
            <Section bestApartments={bestApartments} />
        );
    }
}

const WithUserLoaded = withDataLoaded({
    WithData: BestApartmentsSection,
    WithoutData: () => (
        <Section />
    ),
    data: [
        {
            storeKeys: ['bestApartments'],
            loadDataFn: () => Actions.getBestApartments()
        }
    ]
});

module.exports = WithUserLoaded;