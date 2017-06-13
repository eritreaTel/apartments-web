const React = require('react');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const CookiesHelper  = require('../../helpers/cookies_helper');
const ApartmentHelper  = require('../../helpers/apartment_helper');

import MDSpinner from "react-md-spinner";
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
const  Constants = require('../../helpers/constants');
const  DateHelper = require('../../helpers/date_helper');

const {assetPath} = require('../../helpers/asset_helper');
import {NotificationContainer, NotificationManager} from 'react-notifications';



const onReviewApartmentClicked = function (e, ratingInfo) {
    let email = e.refs.email.value;
    let full_name = e.refs.full_name.value;
    let comment = e.refs.comment.value;
    let apartmentReviewInfo = {...ratingInfo, email, full_name, comment};

    let isProcessing = {reviewAnApartment: true};
    Actions.setIsProcessing(isProcessing);

    let createApartmentReviewsPromise = Actions.saveApartmentReview(apartmentReviewInfo);

    createApartmentReviewsPromise.then(response => {
        if (response.status == 'fail') {
            NotificationManager.error(response.error, 'Apartment Review', Constants.ERROR_DISPLAY_TIME);
        } else {
            NotificationManager.success('Thank you for your review.', 'Apartment Review', Constants.SUCCESS_DISPLAY_TIME);
        }
        isProcessing.reviewAnApartment = false;
        Actions.setIsProcessing(isProcessing);
    });
}

class ApartmentReviewForm extends React.Component {

    constructor() {
        super();

        this.state = {
            location_rating: 0,
            comfort_rating: 0,
            price_rating: 0,
            quality_rating: 0
        };
    }

    componentWillMount() {
        Actions.getAuthenticatedUser();
    }

    onLocationStarClick(nextValue, prevValue, name) {
        if (name =='location_rating') {
            this.setState({location_rating: nextValue});
        } else if(name =='comfort_rating') {
            this.setState({comfort_rating: nextValue});
        } else if(name =='price_rating') {
            this.setState({price_rating: nextValue});
        } else if(name =='quality_rating') {
            this.setState({quality_rating: nextValue});
        }
    }

    render() {
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        const {location_rating, comfort_rating, price_rating, quality_rating } = this.state;
        let {apartmentResponse, user, isProcessing} = this.props;

        let apartment = ApartmentHelper.getApartmentEntity(apartmentResponse);
        let apartment_id = apartment.id;
        let user_id = null, email = undefined, full_name = undefined;
        if (loggedIn && user) {
            user_id = user.id;
            email = user.email;
            full_name = user.first_name + ' ' + user.last_name;

        }
        let ratingInfo = {location_rating, comfort_rating, price_rating, quality_rating, apartment_id, user_id};

        let spinnerClassName = (isProcessing.reviewAnApartment == true) ? 'margin-left-20' : 'margin-left-20 hide';
        let disableInput   		= (isProcessing.reviewAnApartment == true ) ? true : false;
        let disableExistingInput = isProcessing.reviewAnApartment == true || loggedIn;
        let buttonClassname  	= (isProcessing.reviewAnApartment == true) ? 'btn btn-dark pull-left disabled' : 'btn btn-dark pull-left';
        let editStars 			= (isProcessing.reviewAnApartment == true) ? false : true;



        return (
            <div className="col-md-5">
                <div className="row">
                    <div className="col-xs-6 mg-star-rating">
                        <div className="mg-star-rating-title">Location: </div>
                        <StarRatingComponent name="location_rating" editing={editStars} starCount={5} value={location_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
                    </div>
                    <div className="col-xs-6 mg-star-rating">
                        <div className="mg-star-rating-title">Comfort:</div>
                            <StarRatingComponent name="comfort_rating" editing={editStars} starCount={5} value={comfort_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 mg-star-rating">
                        <div className="mg-star-rating-title">Price:</div>
                            <StarRatingComponent name="price_rating" editing={editStars} starCount={5} value={price_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
                        </div>
                        <div className="col-xs-6 mg-star-rating">
                            <div className="mg-star-rating-title">Quality:</div>
                            <StarRatingComponent name="quality_rating" editing={editStars} starCount={5} value={quality_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input ref='full_name' value={full_name} type="text" className="input-with-validation form-control" disabled={disableExistingInput} placeholder="Your Name *"/>
                    </div>
                    <div className="col-md-6">
                        <input ref='email' type="text" value={email} className="input-with-validation form-control" disabled={disableExistingInput} placeholder="Your Email *"/>
                    </div>
                </div>

                <textarea ref='comment' className="input-with-validation form-control" disabled={disableInput} placeholder="Your Comment *" rows="5"></textarea>

                <input onClick={() => {onReviewApartmentClicked(this, ratingInfo)}} type="submit" value="Submit Review" className={buttonClassname}/>
                <MDSpinner ref='footer_spinner' className={spinnerClassName} />
            </div>
        );
    }
}


class ApartmentReviews extends React.Component {
    render () {
        let apartmentReviews = this.props.apartmentReviews;

        let	styledReview = apartmentReviews && apartmentReviews.map(review => {
                return 	<div className="media" key={review.id}>
                            <div className="media-left">
                                <Anchor><img className="media-object" src= {assetPath("images/review.png")} alt="..."/></Anchor>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{review.full_name}</h4>
                                <div className="mg-media-user-rating">
                                    <StarRatingComponent edit={false} name="overall_rating" starCount={5} value={Math.ceil(review.average_rating)} emptyStarColor={"#d3d3d3"} />
                                </div>
                            <div className="media-date">{DateHelper.formatDate(review.created_at, 'D MMM, YYYY')}</div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
        });


        styledReview = apartmentReviews && apartmentReviews.length ==0 ? 'Please be the first one to review this apartment' : styledReview  ;


        return (
            <div className="col-md-7">
                <div className="mg-reviews">
                    {styledReview}
                </div>
            </div>
        );
    }
}


class ApartmentReviewSection  extends React.Component {
    render() {
        return (
            <div className="mg-single-room-review-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 clearfix">

                            <div className="mg-sm-full-rating">
                                <h2 className="mg-sec-left-title">Apartment Reviews</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <ApartmentReviews apartmentReviews = {this.props.apartmentReviews} />
                        <ApartmentReviewForm isProcessing={this.props.isProcessing} user={this.props.user} apartmentResponse={this.props.apartmentResponse}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentReviewSection;
