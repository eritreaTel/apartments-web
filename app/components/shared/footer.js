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
                        <strong>Uganda Guest Houses</strong><br/>
                        Level 13, 2 Elizabeth St<br/>
                        Kampala 3000 Uganda
                    </address>
                    <p>
                        +000-123-456-789<br/>
                        +000-123-456-789
                    </p>
                    <p>
                        <span >info@ugandaGuestHouses.com</span>
                    </p>
                </div>
            </div>
        );
    }

    renderInstagram(intagramImages) {
        const syledLi = intagramImages.map(imgurl => {
            return <li><Anchor><img src={imgurl} alt=""/></Anchor></li>;
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
            "images/ins-01.png",
            "images/ins-02.png",
            "images/ins-03.png",
            "images/ins-04.png",
            "images/ins-05.png",
            "images/ins-06.png",
            "images/ins-07.png",
            "images/ins-08.png",
            "images/ins-09.png"
        ],
        footerMenu : [
            {
                "caption" : "Home",
                "route" : "/index",
                "active" : "active"
            },
            {
                "caption" : "About Us",
                "route" : "/about",
                "active" : ""
            },
            {
                "caption" : "Privacy Policy",
                "route" : "/privacy-policy",
                "active" : ""
            },
            {
                "caption" : "Blog",
                "route" : "/blogs",
                "active" : ""
            },
            {
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