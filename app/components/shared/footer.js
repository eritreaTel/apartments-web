const React = require('react');
const Header = require('../shared/header');
const Anchor = require('../shared/anchor');
const Menu = require('../ribbons/menu/menu');

class Footer extends React.Component {

    renderContactUs() {
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

    renderInstagram(intagramImages) {
        const syledLi = intagramImages.map(imgInfo => {
            return <li><Anchor><img src={imgInfo.thumb} alt=""/></Anchor></li>;
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

    renderSocialMedias() {
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

    renderNewsLetter() {
        const subscribeClicked = (e) => {
            console.log("Email subscription clicked" );
        }

        return (
            <div className="col-md-3 col-sm-6">
                <div className="widget">
                    <h2 className="mg-widget-title">Newsletter</h2>
                    <p>Keep informed about Uganda and get latest news. We will give you tourism information</p>
                    <p><input name="subscription_email" type="email" className="form-control" placeholder="Your Email"/></p>
                    <input onClick={subscribeClicked} name="subscription_button" type="button" className="btn btn-main" value="Subscribe"/>
                </div>
            </div>
        );
    }

    renderFooterMenus() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Menu items={this.props.footerMenu} ulClassName="mg-footer-nav" />
                    </div>
                    <div className="col-md-6">
                        <p>&copy; 2016 <a href="http://www.archsoftwaresolutions.com">Arch Software Solutions</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <footer className="mg-footer">
                <div className="mg-footer-widget">
                    <div className="container">
                        <div className="row">
                            {this.renderContactUs()}
                            {this.renderInstagram(this.props.instagramImages)}
                            {this.renderNewsLetter()}
                            {this.renderSocialMedias()}
                        </div>
                    </div>
                </div>

                <div className="mg-copyright">
                    {this.renderFooterMenus()}
                </div>
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
        ],
        footerMenu : [
            {
                "id" : 1,
                "caption" : "Home",
                "route" : "/index",
                "active" : "active"
            },
            {
                "id" : 2,
                "caption" : "About Us",
                "route" : "/about",
                "active" : ""
            },
            {
                "id" : 3,
                "caption" : "Privacy Policy",
                "route" : "/privacy-policy",
                "active" : ""
            },
            {
                "id" : 4,
                "caption" : "Blog",
                "route" : "/blogs",
                "active" : ""
            },
            {
                "id" : 5,
                "caption" : "Contact Us",
                "route" : "/contact",
                "active" : ""
            }
        ]
    }

    return props;
}

Footer.defaultProps = getDefaultProps();

module.exports = Footer;