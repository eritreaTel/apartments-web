const React = require('react');
const Header = require('../shared/header');
const Anchor = require('../shared/anchor');
const {assetPath} = require('../../helpers/asset_helper');
const Actions = require('../../actions/actions');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     	= ReactValiation.Validate;
const ErrorMessage 	= ReactValiation.ErrorMessage;
const ValidateGroup = ReactValiation.ValidateGroup;

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

const onNewsLetterSubscriptionClicked = function (e) {
    let email = e.refs.subscription_email.value;
    if (email == '' || email == null || email == undefined) {
        NotificationManager.error('Please provide email address.', 'Email Subscription', 3000);
        return;
    }

    let isProcessing = {newsLetterSubscription: true};
    Actions.setIsProcessing(isProcessing);

    let info = {
        'first_name' : 'subscriber',
        'last_name'  : 'subscriber',
        'city'  : 'subscriber',
        'country' : 'subscriber',
        'phone_number' : 'subscriber',
        'email' : email,
        'password' : 'subscriber123',
        'renter_password' : 'subscriber123',
        'terms' : true,
        'type' : 'subscriber',
        'is_active' : 0
    }
    const createUserPromise = Actions.createUser(info);

    createUserPromise.then(response => {
        if (response.status == 'fail') {
            NotificationManager.error(response.error, 'Email Subscription', 3000);
        } else {
            NotificationManager.success('You have successfully subscribed to our email.', 'Email Subscription');
        }

        isProcessing.newsLetterSubscription = false;
        Actions.setIsProcessing(isProcessing);
    });
}

const FooterMenu = function () {
    return (
        <div className="mg-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="mg-footer-nav">
                            <li><Anchor onClick={()=>{Actions.setRoute('/index')}}>Home</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/about-us')}}>About Us</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/privacy-policy')}}>Privacy Policy</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/terms-of-use')}}>Terms of Use</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/blogs')}}>Blogs</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>Contact Us</Anchor> </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <p>&copy; 2016 <a target="_blank" href="http://www.archsoftwaresolutions.com">Arch Software Solutions</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ContactUs = function () {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="widget">
                <h2 className="mg-widget-title">Contact US</h2>
                <address>
                    <strong>UgandaBooking</strong><br/>
                    Level 13, 2 Elizabeth St<br/>
                    Kampala, Uganda
                </address>
                <p>
                    +000-123-456-789<br/>
                    +000-123-456-789
                </p>
                <p>
                    <span >support@ugandaBooking.com</span>
                </p>
            </div>
        </div>
    );
}

const Instagram = function (props) {
    const syledLi = props.instagramImages.map(imgInfo => {
        return <li key={imgInfo.id}><Anchor><img src={assetPath(imgInfo.thumb)} alt=""/></Anchor></li>;
    });

    return (
        <div className="col-md-3 col-sm-6">
            <div className="widget">
                <h2 className="mg-widget-title">Instagram</h2>
                <ul className="mg-instagram">
                    {syledLi}
                </ul>
            </div>
        </div>
    );

}

const SocialMedia = function () {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="widget">
                <h2 className="mg-widget-title">Social Media</h2>
                <p>Follow us on Facebook and Twitter. We will give you accurate and update information. We want you to get informed about trousim in Uganda and also UgandBooking.com</p>
                <ul className="mg-footer-social">
                    <li><a target="_blank" href='https://www.facebook.com/ugandabooking'><i className="fa fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://www.twitter.com/ugandaBoooking"><i className="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

class NewsLetterSubscription extends React.Component {
    render() {
        const {isProcessing} = this.props;

        let spinnerClassName = (isProcessing.newsLetterSubscription == true) ? 'margin-left-20' : 'margin-left-20 hide';
        let disableInput   = (isProcessing.newsLetterSubscription == true) ? true : false;
        let buttonClassname  = (isProcessing.newsLetterSubscription == true) ? 'btn btn-main disabled' : 'btn btn-main';

        return (
            <ValidateGroup>
                <NotificationContainer/>
                <div className="col-md-3 col-sm-6">
                    <div className="widget">
                        <h2 className="mg-widget-title">Newsletter</h2>
                        <p>Keep informed about Uganda and get latest news. We will give you tourism information</p>
                        <Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
                            <input tabIndex="100" ref="subscription_email" type="email" className="form-control" disabled={disableInput} placeholder="Your Email"/>
                        </Validate>
                        <input onClick={() => {onNewsLetterSubscriptionClicked(this)}} ref="subscription_button" type="button" className={buttonClassname} value="Subscribe"/>
                        <MDSpinner ref='footer_spinner' className={spinnerClassName} />

                    </div>
                </div>
            </ValidateGroup>
        );
    }
}


class Footer extends React.Component {
    render() {

        const {store : {isProcessing}} = this.props;
        //console.log("Inside footer, and is processing is");
        //console.log(isProcessing);

        return (
            <footer className="mg-footer">
                <div className="mg-footer-widget">
                    <div className="container">
                        <div className="row">
                            <ContactUs />
                            <Instagram  instagramImages = {this.props.instagramImages} />
                            <NewsLetterSubscription isProcessing={isProcessing} />
                            <SocialMedia />
                        </div>
                    </div>
                </div>

                <FooterMenu />
            </footer>
        );
    }
};

function getDefaultProps() {
    let props = {
        instagramImages : [
            {
                'id' : 1,
                'thumb' : "images/ins-01.png"
            },
            {
                'id' : 2,
                'thumb' : "images/ins-02.png"
            },
            {
                'id' : 3,
                'thumb' : "images/ins-03.png"
            },
            {
                'id' : 4,
                'thumb' : "images/ins-04.png"
            },
            {
                'id' : 5,
                'thumb' : "images/ins-05.png"
            },
            {
                'id' : 6,
                'thumb' : "images/ins-06.png"
            },
            {
                'id' : 7,
                'thumb' : "images/ins-07.png"
            },
            {
                'id' : 8,
                'thumb' : "images/ins-08.png"
            },
            {
                'id' : 9,
                'thumb' : "images/ins-09.png"
            }
        ]
    }

    return props;
}

Footer.defaultProps = getDefaultProps();

module.exports = Footer;