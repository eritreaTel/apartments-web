const React = require('react');
const Danger = require('./danger');
const Info = require('./info');
const Success = require('./success');
const Warning = require('./warning');

const ShowMessage = function (props) {
    let {errors, message} = props;
    let errorClass = (errors && errors.length > 0) ? 'row show' : 'row hide';
    let type = (errors && errors.length > 0) ? 'error' : 'message';

    let content = '';
    switch (type) {
        case 'error':
            content = <Danger errors= {errors} />
            break;
        case 'message':
            content = <Success message= {message} />
            break;
        default:
            content = '';
    }

    return (
        <div className={errorClass}>
            <div className="col-md-3"> </div>
            <div className='col-md-6'>
                {content}
            </div>
            <div className="col-md-3"> </div>
        </div>
    );
}

module.exports = ShowMessage;