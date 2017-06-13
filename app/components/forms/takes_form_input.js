const React = require('react');

const types = React.PropTypes;

function takesFormInput(Wrapped, {defaultValue} = {}) {
  class TakesFormInput extends React.Component {
    static defaultValue = defaultValue;

    static propTypes = {
      formValues: types.object,
      onChange: types.func,
      onBlur: types.func,
      name: types.string
    };

    render() {
      const {formValues, onChange, onBlur, name, ...others} = this.props;
      const formValue = formValues && formValues[name] ? formValues[name] : '';

      const handleChange = (e) => {
        if(onChange) {
          onChange(name, e.currentTarget.value, e);
        }
      };

      const handleBlur = (e) => {
        if(onBlur) {
          onBlur(name, e.currentTarget.value, e);
        }
      };

      return (<Wrapped {...{
          name,
          value:formValue,
          onBlur:handleBlur,
          onChange:handleChange,
          ...others
          }
        }
        />);
    }
  }

  return TakesFormInput;
}

module.exports = takesFormInput;
