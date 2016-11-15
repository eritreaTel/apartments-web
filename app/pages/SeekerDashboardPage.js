const React = require('react');
const PageTitle = require('../components/shared/pageTitle');


const MyReservations = function () {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1"> </div>
				<div className="col-md-10"> <h5> My Reservations </h5> </div>
				<div className="col-md-1"> </div>
			</div>
		</div>
	);
}

const MySearchs = function () {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1"> </div>
				<div className="col-md-10"> <h5> My Searches </h5> </div>
				<div className="col-md-1"> </div>
			</div>
		</div>
	);
}


class SeekerDashboardPage extends React.Component {

	render() {
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<MyReservations />
				<MySearchs />
			</div>
		);
	}
};

module.exports = SeekerDashboardPage;