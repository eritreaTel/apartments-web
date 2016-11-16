const React = require('react');


const MyReservations = function () {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1"> </div>
				<div className="col-md-10"> <h5> My Reservations .. will be table with last five reservations </h5> </div>
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
				<div className="col-md-10"> <h5> My Searches .. will be table with last ten searches </h5> </div>
				<div className="col-md-1"> </div>
			</div>
		</div>
	);
}


class Seeker extends React.Component {

	render() {
		return (
			<div>
				<MyReservations />
				<MySearchs />
			</div>
		);
	}
};

module.exports = Seeker;