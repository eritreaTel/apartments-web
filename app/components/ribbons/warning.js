const React = require('react');

const Warning = function (props) {
    return (
        <div className="alert alert-warning" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <i className="fa fa-warning"></i>
            <strong> Warning! </strong>
            {props.message}
        </div>
    );
}

module.exports = Warning;