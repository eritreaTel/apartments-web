const React = require('react');
const Header = require('../shared/header');
const Anchor = require('../shared/anchor');
const {assetPath} = require('../../helpers/asset_helper');
const Actions = require('../../actions/actions');
const Constants = require('../../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

const onNewsLetterSubscriptionClicked = function (e) {
    let email = e.refs.subscription_email.value;
    if (email == '' || email == null || email == undefined) {
        e.refs.subscription_email.focus();
        NotificationManager.error('Please provide email address.', 'Email Subscription', Constants.ERROR_DISPLAY_TIME);
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
            e.refs.subscription_email.focus();
            NotificationManager.error(response.error, 'Email Subscription', Constants.ERROR_DISPLAY_TIME);
        } else {
            NotificationManager.success('You have successfully subscribed to our email.', 'Email Subscription', Constants.SUCCESS_DISPLAY_TIME);
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
                    <strong>UgandaBooking</strong><br/><br/>
                    Off Kansanga-Ggaba Road<br/>
                    Oppossite Kansanga Secondary School<br/>
                    Kampala, Uganda
                </address>
                <p>
                    +256-757-038880<br/>
                    +256-704-924531
                </p>
                <p>
                    <span>ugandaBooking@gmail.com</span>
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
                <div>
                    <NotificationContainer/>
                    <div className="col-md-3 col-sm-6">
                        <div className="widget">
                            <h2 className="mg-widget-title">Newsletter</h2>
                            <p>Keep informed about Uganda and get latest news. We will give you tourism information</p>
                            <input tabIndex="100" ref="subscription_email" type="email" className="form-control" disabled={disableInput} placeholder="Your Email"/>
                            <input onClick={() => {onNewsLetterSubscriptionClicked(this)}} ref="subscription_button" type="button" className={buttonClassname} value="Subscribe"/>
                            <MDSpinner className={spinnerClassName} />

                        </div>
                    </div>
                </div>
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