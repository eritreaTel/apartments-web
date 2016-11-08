const React = require('react');
const Header = require('../shared/header');
const Anchor = require('../shared/anchor');
const {assetPath} = require('../../helpers/asset_helper');
const Actions = require('../../actions/actions');

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
                            <li><Anchor onClick={()=>{Actions.setRoute('/blogs')}}>Blogs</Anchor> </li>
                            <li><Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>Contact Us</Anchor> </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <p>&copy; 2016 <a href="http://www.archsoftwaresolutions.com">Arch Software Solutions</a>. All rights reserved.</p>
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
                    <strong>Uganda GuestHouses</strong><br/>
                    Level 13, 2 Elizabeth St<br/>
                    Kampala, Uganda
                </address>
                <p>
                    +000-123-456-789<br/>
                    +000-123-456-789
                </p>
                <p>
                    <span >support@ugandaGuestHouses.com</span>
                </p>
            </div>
        </div>
    );
}

const Instagram = function (props) {
    const syledLi = props.instagramImages.map(imgInfo => {
        return <li><Anchor><img src={assetPath(imgInfo.thumb)} alt=""/></Anchor></li>;
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
                <p>Follow us on Facebook, Twitter, Pintrest, GooglePlus. We will give you accurate and update information. We want you to get informed about Uganda guest houses information</p>
                <ul className="mg-footer-social">
                    <li><Anchor><i className="fa fa-facebook"></i></Anchor></li>
                    <li><Anchor><i className="fa fa-twitter"></i></Anchor></li>
                    <li><Anchor><i className="fa fa-pinterest"></i></Anchor></li>
                    <li><Anchor><i className="fa fa-google-plus"></i></Anchor></li>
                    <li><Anchor><i className="fa fa-rss"></i></Anchor></li>
                </ul>
            </div>
        </div>
    );
}

const NewsLetterSubscription = function () {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="widget">
                <h2 className="mg-widget-title">Newsletter</h2>
                <p>Keep informed about Uganda and get latest news. We will give you tourism information</p>
                <p><input name="subscription_email" type="email" className="form-control" placeholder="Your Email"/></p>
                <input onClick={() => {}} name="subscription_button" type="button" className="btn btn-main" value="Subscribe"/>
            </div>
        </div>
    );
}


class Footer extends React.Component {
    render() {
        return (
            <footer className="mg-footer">
                <div className="mg-footer-widget">
                    <div className="container">
                        <div className="row">
                            <ContactUs />
                            <Instagram  instagramImages = {this.props.instagramImages} />
                            <NewsLetterSubscription />
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