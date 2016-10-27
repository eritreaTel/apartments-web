/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */


const Checkbox = ({onChange, formValues, name, ...others}) => {
  function handleChange(e) {
    onChange(name, e.currentTarget.checked);
  }

  return <input type="checkbox" name={name} defaultChecked={formValues[name]} onChange={handleChange} {...others} />;
};

module.exports = Checkbox;
