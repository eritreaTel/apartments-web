const React = require('react');


class Modal extends React.Component {

    render() {
        let {apartment} = this.props;
        let modalId = "apartment" + apartment.id;
        return (
            <div className="modal fade" id={modalId} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel4">Responsive Modal</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {this.props.children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-u btn-u-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn-u btn-u-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Modal;