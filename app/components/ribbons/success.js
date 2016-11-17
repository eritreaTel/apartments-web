const React = require('react');

const Success = function (props) {
    return (
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <i class="fa fa-check-circle"></i>
            <strong> Well done! </strong>
            {props.message}
        </div>
    );
}

module.exports = Success;