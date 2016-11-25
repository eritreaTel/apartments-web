const React = require('react');
const Actions = require('../../actions/actions')

var Checkbox = React.createClass({
    getInitialState: function () {
        return {
            checked: this.props.checked || false
        };
    },
    render: function () {
        return (
            <label>
                <input ref='terms' type="checkbox"
                name={this.props.name}
                checked={this.state.checked}
                onClick={this.handleClick}
                value={this.props.value} />
                {this.props.label}
            </label>
        );
    },

    handleClick: function(e) {
        alert('changed' + e.target.checked);
        Actions.acceptTermsAndServices({checked: e.target.checked});
    },
});

module.exports = Checkbox;