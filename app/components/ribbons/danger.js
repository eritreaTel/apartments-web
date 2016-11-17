const React = require('react');

const Danger = function (props) {
    return (
        <div className="alert alert-danger" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"> &times;</span>
            </button>
            <i className="fa fa-question-circle"></i> <strong>Oh error! </strong>
            {props.message}
        </div>
    );
}

module.exports = Danger;