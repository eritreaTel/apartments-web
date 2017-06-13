/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const Header = ({children, className}) => (
  <header className={className}>
      {children}
  </header>
);

module.exports = Header;
