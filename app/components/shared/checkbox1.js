const React = require('react');
const Actions = require('../../actions/actions')

var MyCheckbox = React.createClass({

    getInitialState: function () {
        return {
            fieldname: '',
            value: this.props.value
        };
    },

    render: function () {
        var valueLink = this.linkState('value');
        var me = this;
        var handleChange = function (e) {
            valueLink.requestChange(e.target.value === 'on');
        };

        return React.DOM.input({
            type: 'checkbox',
            checked: valueLink.value,
            onChange: handleChange,
        });
    }

});

module.exports = MyCheckbox;