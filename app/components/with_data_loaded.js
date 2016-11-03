const React = require('react');
const _ = require('lodash');

function withDataLoaded({WithData, WithoutData = null, data}) {
  function storeHasKeys(store, storeKeys) {
    return storeKeys.every((key) => {
      return Array.isArray(store[key]) ? store[key].length > 0 : !!store[key];
    });
  }

  function hasItem(store, item) {
    let itemFound = false;
    if (item.storeKeys && item.checkDataFn) {
      itemFound = item.checkDataFn(store) && storeHasKeys(store, item.storeKeys);
    } else if (item.storeKeys) {
      itemFound = storeHasKeys(store, item.storeKeys);
    } else if (item.checkDataFn) {
      itemFound = item.checkDataFn(store);
    }
    return itemFound;
  }

  class WithDataLoaded extends React.Component {
    static propTypes = {
      store: React.PropTypes.object.isRequired
    };

    componentDidMount() {
			const {store} = this.props;

      _.each(data, (item) => {
        if (!hasItem(store, item)) {
          item.loadDataFn(store);
        }
      });
    }

    render() {
      const {store} = this.props;
      if (_.every(data, (item) => hasItem(store, item))) {
        return <WithData {...this.props}/>;
      }

      return WithoutData ? <WithoutData {...this.props}/> : null;
    }
  }

  return WithDataLoaded;
}

module.exports = withDataLoaded;
