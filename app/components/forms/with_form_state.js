const React = require('react');

function withFormState({formName, getInitialState}, Wrapped) {
  class WithFormState extends React.Component {
    constructor(props) {
      super(props);

      this.state = getInitialState(props);
    }

    handleChange = (fieldName, value) => {
      this.setState({
        [fieldName]: value
      });
    };

    render() {
      return (
        <Wrapped {...this.props} {...{
          [formName]: {
            values: this.state,
            onChange: this.handleChange
          }
        }} />
      );
    }
  }

  return WithFormState;
}

module.exports = withFormState;
