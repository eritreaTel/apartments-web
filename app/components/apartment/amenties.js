const React = require('react');
const Anchor = require('../shared/anchor')

class Amenities extends React.Component {

    render() {
        const {amenities, outerDivClass, innerDivClass, amentiesToDisplay} = this.props;
        const mid = Math.ceil(amentiesToDisplay/2);
        const sectionOne = amenities.slice(0, mid).map(item =>{
            return <li key={item.id}><i className={item.icon_name}></i>{item.name}</li>
        });

        const sectionTwo = amenities.slice(mid, amentiesToDisplay).map(item => {
            return <li key={item.id}><i className={item.icon_name}></i>{item.name}</li>
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
