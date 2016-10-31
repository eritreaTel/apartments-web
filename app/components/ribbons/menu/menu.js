const React = require('react');
const Actions = require('../../../actions/actions');
const Anchor = require('../../shared/anchor');


class Menu extends React.Component {


    renderMenuItems(items) {
        return items.map(item => {
            return <li  className={item.active}><Anchor onClick={()=>{Actions.setRoute(item.route)}}>{item.caption}</Anchor> </li>
        });
    }

    render() {


        const {items, ulClassName} = this.props;

        return (
            <ul className={ulClassName}>
                {this.renderMenuItems(items)}
            </ul>
        );
    }
};

module.exports = Menu;