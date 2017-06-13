const React = require('react');

const Modal = function(props) {

    return (
        <div className="modal fade" id={props.modalId} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    );

};

module.exports = Modal;