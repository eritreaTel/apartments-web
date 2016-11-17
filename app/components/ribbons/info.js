const React = require('react');

const Info = function (props) {
    return (
        <div class="alert alert-info" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <i class="fa fa-info-circle"></i> <strong> Heads up! </strong>
            {props.message}
        </div>
    );
}

module.exports = Info;