const React = require('react');


const PageTitle  = function (props) {
    return (
        <div className={props.parentClassName}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = PageTitle;