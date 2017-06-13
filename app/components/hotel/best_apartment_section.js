const React = require('react');

const ApartmentMedium = require('../apartment/apartment_medium');
const ApartmentHelper = require('../../helpers/apartment_helper');
const withDataLoaded = require('../with_data_loaded');
const Actions = require('../../actions/actions');
const SvgImage = require('../shared/svg_image');
const Anchor = require('../shared/anchor');
import MDSpinner from "react-md-spinner";

const Section = function(props) {
    return (
        <div className="container mg-best-rooms">
            <div className="row">
                <div className="col-md-12">
                    <TitleSection />
                    {props.children}
                </div>
            </div>
        </div>
    );
}

const TitleSection  = function() {
        return (
            <div className="mg-sec-title">
                <h2>Recommended Hotels</h2>
                <p>Some of Kampala's awesome accommodations</p>
            </div>
        );
}

const  ApartmentsSection = function(props) {
    //display top 3 best guest houses only
    const bestApartments = props.bestApartments;

    let styledApartments;
    if (bestApartments.length > 0) {
        styledApartments = bestApartments.slice(0, 3).map(aptResponse => {
            return  <div key={Math.random()} className="col-sm-4">
                        <ApartmentMedium aptResponse={aptResponse}/>
                    </div>
        });
    } else {
        styledApartments = <div>
                                <div  className="col-sm-2"></div>
                                <div  className="col-sm-8">
                                    <div className="alert alert-info" role="alert">
                                        <i className="fa fa-info-circle"></i>
                                        <strong> There are no hotels matching the selected criterias. Feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</strong>
                                    </div>
                                </div>
                                <div  className="col-sm-2"></div>
                            </div>
    }


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
            <Section >
                <ApartmentsSection bestApartments = {bestApartments} />
            </Section>
        );
    }
}

const WithUserLoaded = withDataLoaded({
    WithData: BestApartmentsSection,
    WithoutData: () => (
        <Section >
            <div className="load-spin">
                 <MDSpinner>Loading </MDSpinner>
            </div>
        </Section>
    ),
    data: [
        {
            storeKeys: ['bestApartments'],
            loadDataFn: () => Actions.getBestApartments()
        }
    ]
});

module.exports = WithUserLoaded;