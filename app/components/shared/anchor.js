/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const Anchor = ({onClick, ...others}) => {
  const click = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return <a {...others} onClick={click}/>;
};

module.exports = Anchor;
