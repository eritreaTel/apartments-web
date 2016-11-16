const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Admin = require('../components/myaccount/admin');
const Owner = require('../components/myaccount/owner');
const Seeker = require('../components/myaccount/seeker');
const Employee = require('../components/myaccount/employee');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');

const MyAccountBody = function(props) {
    return (
        <div className="mg-about-features">
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


class MyAccountPage extends React.Component {

	render() {
        const {store : {user}} = this.props;
        console.log('authenticated user is');
        console.log(user);

        let  dashboard;
        switch (user.type) {
            case 'seeker':
                dashboard =   <Seeker user = {user} />;
                break;
            case 'admin':
                dashboard =   <Admin user = {user} />;
                break;
            case 'employee':
                dashboard =   <Employee user = {user} />;
                break;
            case 'owner':
                dashboard =   <Owner user = {user} />;
                break;
        }
        return (
            <div>
            <PageTitle parentClassName="mg-page-title-space parallax"/>
            <MyAccountBody>
                {dashboard}
            </MyAccountBody>
            </div>
        );
	}
};

const WithUserLoaded = withDataLoaded({
		WithData: MyAccountPage,
		WithoutData: () => (
			<MyAccountBody >
                <div className="load-spin">
                    <SvgImage name="dark-sun"/> Loading
                </div>
			</MyAccountBody>
		),
		data: [
			{
				storeKeys: ['user'],
				loadDataFn: () => Actions.getAuthenticatedUser()
			}
		]
});

module.exports = WithUserLoaded;
