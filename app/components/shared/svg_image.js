const InlineSVG = require('svg-inline-react');
const cx = require('classnames');

/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const SvgImage = ({name, className, ...others}) => (
  <InlineSVG className={cx(`${name}-icon icon`, className)} src={require(`svg-inline!../../images/${name}.svg`)} {...others}/>
);

module.exports = SvgImage;
