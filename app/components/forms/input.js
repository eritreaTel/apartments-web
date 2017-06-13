/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const takesFormInput = require('./takes_form_input');

const Input = (props) => (
  <input {...props}/>
);

module.exports = takesFormInput(Input);
