const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Owner = require('../components/myaccount/owner');
const withDataLoaded = require('../components/with_data_loaded');
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


class OwnerAccountPage extends React.Component {
    componentWillMount(){
        const {store : {user, ownerGuestHouse}} = this.props;
        if (user.type != 'owner') {
            Actions.setRoute('/sign-in');
        }

    }

    render() {
        const {store : {user, ownerGuestHouse, userServices, isProcessing}} = this.props;
        return (
            <div>
                <PageTitle parentClassName="mg-page-title-space parallax"/>

                <MyAccountBody>
                    <div className="margin-bottom-30">
                        <h4> Hello {user.first_name}, it's nice to see you </h4>
                    </div>
                    <Owner user={user} ownerGuestHouse={ownerGuestHouse} user={user} userServices={userServices} isProcessing={isProcessing}/>
                </MyAccountBody>
            </div>
        );
	}
};

const WithUserLoaded = withDataLoaded({
		WithData: OwnerAccountPage,
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
			},
            {
                storeKeys: ['ownerGuestHouse'],
                loadDataFn: () => Actions.getGuestHouseByOwner()
            }
		]
});

module.exports = WithUserLoaded;
