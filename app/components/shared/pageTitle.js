const React = require('react');


class PageTitle extends React.Component {

    render() {
        const {parentClassName} = this.props;

        return (
            <div className={parentClassName}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = PageTitle;