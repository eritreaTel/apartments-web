const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');

class Amenities extends React.Component {

    render() {
        const {amenities, outerDivClass, innerDivClass} = this.props;
        const len = amenities.length;
        const sectionOne = amenities.slice(0, Math.ceil(len/2)).map(item =>{
            return <li><i className={item.icon_name}></i>{item.name}</li>
        });

        const sectionTwo = amenities.slice(3, len).map(item => {
            return <li><i className={item.icon_name}></i>{item.name}</li>
        });

        return (
            <div className={outerDivClass}>
                <div className={innerDivClass}>
                    <ul>
                        {sectionOne}
                     </ul>
                </div>
                <div className={innerDivClass}>
                    <ul>
                        {sectionTwo}
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = Amenities;
