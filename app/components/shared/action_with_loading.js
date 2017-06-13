const cx = require('classnames');
const SvgImage = require('./svg_image');

/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const ActionWithLoading = ({processing, children, alt, onClick, className,buttonType, ...others}) => {
  onClick = onClick || (() => {});
	buttonType = buttonType || 'submit';
  return (
    <button type={buttonType} {...others} className={cx('action-primary', className, {processing, 'action-alt': alt})} onClick={onClick}>
      <div className="action-contents">{children}</div>
      {processing && <div className="processing-icon"><SvgImage name="sun" /></div> }
    </button>
  );
};

module.exports = ActionWithLoading;
