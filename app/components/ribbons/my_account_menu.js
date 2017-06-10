const React = require('react');
const Header = require('../shared/header');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const CookiesHelper = require('../../helpers/cookies_helper');
const AnHelper = require('../../helpers/analytics_helper');

class myAccountMenu extends React.Component {

    onSeekerBookingsClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_SEEKER_ACCOUNT_BOOKING_PAGE, AnHelper.ACTION_CLICKED);
        Actions.seekerUserInfoUpdated({'activeLink' : 'booking'});
        Actions.setRoute('/seeker-account');
    }

    onEdiProfileClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_SEEKER_ACCOUNT_PROFILE_PAGE, AnHelper.ACTION_CLICKED);
        Actions.seekerUserInfoUpdated({'activeLink' : 'editProfile'});
        Actions.setRoute('/seeker-account');
    }

    onOwnerAccommodationClicked() {
        Actions.ownerUserInfoUpdated({'activeLink' : 'edit-accommodation'});
        Actions.setRoute('/owner-account');
    }

    onOwnerRoomsClicked() {
        Actions.ownerUserInfoUpdated({'activeLink' : 'edit-rooms'});
        Actions.setRoute('/owner-account');
    }

    onSignInClicked(){
        AnHelper.logEvent(AnHelper.CATEGORY_SIGN_IN_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/sign-in')
        Actions.goToSignInPage();
    }

    logOut(){
        AnHelper.logEvent(AnHelper.CATEGORY_SIGN_OUT_PAGE, AnHelper.ACTION_CLICKED);
        Actions.logOut();
        window.location.reload()
        Actions.setRoute('/index');
    }

    render() {
        const {page} = this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        let content;
        if (loggedIn) {
            let userType = CookiesHelper.getDataFromCookie('userType');
            if (userType == 'seeker') {
                content = <li  className={ page == 'seeker-account' ? 'active dropdown' : 'dropdown'}>
                            <Anchor className="dropdown-toggle" onClick={() => {}} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></Anchor>
                                <ul className="dropdown-menu">
                                    <li><Anchor onClick={this.onSeekerBookingsClicked.bind(this)}>Bookings</Anchor></li>
                                    <li><Anchor onClick={this.onEdiProfileClicked.bind(this)}>Edit Profile</Anchor></li>
                                    <li><Anchor onClick={this.logOut.bind(this)}>Log Out</Anchor></li>
                                </ul>
                            </li>;
            } else if (userType == 'owner') {
                 content =  <li  className={ page == 'seeker-account' ? 'active dropdown' : 'dropdown'}>
                                <Anchor className="dropdown-toggle" onClick={() => {}} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></Anchor>
                                <ul className="dropdown-menu">
                                    <li><Anchor onClick={this.onOwnerAccommodationClicked.bind(this)}>Edit Accommodation</Anchor></li>
                                    <li><Anchor onClick={this.onOwnerRoomsClicked.bind(this)}>Edit Rooms</Anchor></li>
                                    <li><Anchor onClick={this.logOut.bind(this)}>Log Out</Anchor></li>
                                </ul>
                            </li>;
            }
        } else {
            content = <li  className={ page == 'sign-in' ? 'active' : ''}><Anchor onClick={this.onSignInClicked.bind(this)}>Sign In</Anchor> </li>;
        }


        return ( content );
    }
};

module.exports = myAccountMenu;