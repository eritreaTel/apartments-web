const React = require('react');
const Header = require('../shared/header');
const Menu = require('../ribbons/menu/menu.js');


class HeaderBar extends React.Component {

  render() {
    return (
      <Header className = 'header transp sticky'>
          <nav className="navbar navbar-inverse">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#"><img src="images/logo.png" alt="logo"/></a>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <Menu items = {this.props.headerMenu} ulClassName="nav navbar-nav navbar-right" />
                  </div>
              </div>
          </nav>
      </Header>
    );
  }
};

function getDefaultProps() {
  let props = {
    headerMenu : [
      {
          "caption" : "Home",
          "route" : "/index",
          "active" : "active"
      },
      {
          "caption" : "Guest Houses",
          "route" : "/guest-houses",
          "active" : ""
      },
      {
          "caption" : "About Us",
          "route" : "/about-us",
          "active" : ""
      },
      {
          "caption" : "Blog",
          "route" : "/blogs",
          "active" : ""
      },
      {
          "caption" : "Contact Us",
          "route" : "/contact-us",
          "active" : ""
      }
    ]
  }

  return props;
}

HeaderBar.defaultProps = getDefaultProps();

module.exports = HeaderBar;