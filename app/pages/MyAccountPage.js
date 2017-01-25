const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Admin = require('../components/myaccount/admin');
const Owner = require('../components/myaccount/owner');
const Seeker = require('../components/myaccount/seeker');
const Employee = require('../components/myaccount/employee');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const Anchor = require('../components/shared/anchor');

import MDSpinner from "react-md-spinner";

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
        const {store : {user, userServices, isProcessing, apartmentBookings}} = this.props;
        let  dashboard;
        switch (user.type) {
            case 'seeker':
                dashboard =   <Seeker apartmentBookings={apartmentBookings} user = {user} userServices={userServices} isProcessing={isProcessing}/>;
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
                <PageTitle parentClassName="mg-my-account-page-title-space parallax"/>
                <MyAccountBody>
                    <div className="margin-bottom-30">
                        <h4> Hello {user.first_name}, it's nice to see you </h4>
                    </div>
                    {dashboard}
                </MyAccountBody>
            </div>
        );
	}
};

const WithUserLoaded = withDataLoaded({
		WithData: MyAccountPage,
		WithoutData: () => (
		    <div>
                <PageTitle parentClassName="mg-my-account-page-title-space parallax"/>
		        <MyAccountBody >
                    <div className="load-spin">
                        <MDSpinner />
                    </div>
			    </MyAccountBody>
            </div>
		),
		data: [
			{
				storeKeys: ['user'],
				loadDataFn: () => Actions.getAuthenticatedUser()
			}
		]
});

module.exports = WithUserLoaded;
