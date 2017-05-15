const React = require('react');
const Anchor = require('../shared/anchor')

class AllAmenities extends React.Component {

    render() {
        const {category, items} = this.props;

        let cssClass = '';
        const styledItems = items.map(item =>{
                cssClass = (item.value == 1) ? 'fa fa-check' : 'fa fa-times';
                return <li>{item.name} <span><i className={cssClass}></i></span> </li>;
        });

        return (
                <div className="col-md-3 col-sm-6">
                    <div className="pricing">
                        <div className="pricing-head">
                            <h4>{category}</h4>
                        </div>
                        <ul className="pricing-content list-unstyled">
                            {styledItems}
                        </ul>
                    </div>
                </div>
        );
    }
}

module.exports = AllAmenities;
