/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */

const takesFormInput = require('../../forms/takes_form_input');

const Rooms = takesFormInput(
  (props) => (
    <select {...props}>
      <option value="" disabled>Room</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value=">=7">&gt;= 7</option>
    </select>
  ),
  {
    defaultValue: 'Room'
  }
);

module.exports = Rooms;
