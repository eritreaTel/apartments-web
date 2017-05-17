const React = require('react');
const ApplicationHelper = require('../../helpers/application_helper');
const Amenities = require('../../components/apartment/amenties');
const Anchor = require('../../components/shared/anchor');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');
const ApartmentHelper  = require('../../helpers/apartment_helper');
const AllAmenities = require('./all_amenties');
const Slider = require('react-slick');

const onBookApartmentPageClicked = function (apartmentKey) {
    Actions.bookApartmentPageClicked({apartmentKey});
    Actions.setRoute('/hotels');
}

const onKeepSearchingClicked = function () {
    Actions.goBackToSearch(null);
    Actions.setRoute('/hotels');
}


const ApartmentFacilities = function(props) {
    let {amenities} = props;
    let {bedroom, bathroom, livingArea, foodAndDrink, technology, activities, outdoors} = ApartmentHelper.getAmenitiesByCategory(amenities);

    return (
        <div className="row mg-single-room-facilities">
            <div className="col-md-12">
                <h2 className="mg-sec-left-title">Facilities of {props.guestHouse.name}</h2>
                <div className="row margin-bottom-40 pricing-medium-light">
                    <AllAmenities category ='Bedroom' items={bedroom} />
                    <AllAmenities category = 'Bathroom' items={bathroom}/>
                    <AllAmenities category = 'Activities' items={activities}/>
                    <AllAmenities category = 'Technology' items={technology}/>
                </div>
                <div className="row margin-bottom-40 pricing-medium-light">
                    <AllAmenities category = 'Living Area' items={livingArea}/>
                    <AllAmenities category = 'Food & Drink' items={foodAndDrink}/>
                </div>
            </div>
        </div>
    );
}


const ApartmentDescription = function(props) {
    return(
        <div className="row mg-single-room-description">
            <div className="col-md-12">
                <h2 className="mg-sec-left-title">Apartment Description</h2>
                <div dangerouslySetInnerHTML={{__html: props.longDescription}}></div>
            </div>
        </div>
    );
}

const AmenitiesAndControlButtons = function(props) {
    let {amenities} = props;

    return (
        <div className="col-md-5 mg-room-fecilities">
            <h2 className="mg-sec-left-title">Apartment Amenities</h2>
            <Amenities amentiesToDisplay="10" amenities={amenities} outerDivClass="row" innerDivClass="col-sm-6" />
            <div className="row">
                <div className="col-md-6">
                    <Anchor onClick={() => onKeepSearchingClicked()} className="btn btn-dark">Keep Searching</Anchor>
                </div>
                <div className="col-md-6">
                    <Anchor onClick = {() => {onBookApartmentPageClicked(props.apartmentResponse.apartmentKey)}} className=" pull-left btn btn-main btn-next-tab">Book Now</Anchor>
                </div>
            </div>
        </div>
    );
}


class ApartmentGalleries extends React.Component {
    render() {
        let sliderProps = {
            arrows    : true,
            autoplay  : false,
            dots : true,
            slidesToShow : 1,
            slidesToScroll : 1,
            infinite : true
        }

        const {galleries} = this.props;

        let sliderWithData = '';
        if (galleries.length > 0) {
            let styledGalleries = galleries.map(gallery => {
                                    return 	<img key={gallery.id} src={assetPath(gallery.full_image)} alt={gallery.caption}/>;
                                  });

            sliderWithData = <Slider {...sliderProps}>
                                {styledGalleries}
                            </Slider>
        }

        return (
            <div className="col-md-7">
                {sliderWithData}
            </div>
        )
    }
}



const ApartmentMiddleContent = function (props) {
    let apartmentResponse = props.apartmentResponse ;
    let {apartmentKey, longDescription} = apartmentResponse;
    let galleries = ApartmentHelper.getGalleries(apartmentResponse);
    let guestHouse = ApartmentHelper.getGuestHouse(apartmentResponse);
    let amenities = ApartmentHelper.getComboAmenities(props.apartmentResponse);
    let amenitiesWithValueOne = ApartmentHelper.getAmenitiesByValue(amenities, 1);

    return (
        <div className="mg-single-room">
            <div className="container">
                <div className="row">
                    <ApartmentGalleries galleries = {galleries} />
                    <AmenitiesAndControlButtons amenities={amenitiesWithValueOne} apartmentResponse = {apartmentResponse} />
                </div>
                <ApartmentDescription longDescription={longDescription} />
                <ApartmentFacilities guestHouse={guestHouse} amenities={amenities} />
            </div>
        </div>
    );
}

module.exports = ApartmentMiddleContent;
