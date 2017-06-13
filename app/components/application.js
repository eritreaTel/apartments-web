require('babel-polyfill');

const Actions = require('../actions/actions');
const Bootstrap = require('../bootstrap');
const {isClient} = require('../helpers/application_helper');
const Page = require('./page');
const React = require('react');
const Router = require('./router');
const {useStore} = require('./use_store');
const types = React.PropTypes;

class Application extends React.Component {
  componentWillUpdate() {
    const {store: {view}} = this.props;
    const whitelist = [
      'login',
      'resetPassword'
    ];
    //Actions.setRoute('/');
  }

  render() {
    const {router, store} = this.props;
    return (
      <div className="application">
        {isClient() && <Page {...{store}}/>}
        <Router {...{router}}/>
      </div>
    );
  }
}

Application.propTypes = {
  router: types.object,
  store: types.object.isRequired
};

const App = useStore(Application);

Bootstrap.init(App);

module.exports = App;
