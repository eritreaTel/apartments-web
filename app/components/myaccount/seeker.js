const React = require('react');


const MyReservations = function () {
	return (
		<div className="container">
			<div className="row">
				<div className="mg-feature col-md-12"> <h3> My Bookings </h3> </div>
				<div className="col-md-12">
					<table className="table mb40">
						<thead>
							<tr>
								<th>#</th>
								<th>Guesthouse Name</th>
								<th>Phone #</th>
								<th>CheckIn</th>
								<th>CheckOut</th>
								<th>Bed</th>
								<th>Bath</th>
								<th>Amount Paid</th>
								<th>Status </th>
								<th>Confirmation # </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>1.</th>
								<td>Apricot </td>
								<td>256-1-123-123-1234 </td>
								<td>12th, December 2016</td>
								<td>25th, December 2016</td>
								<td>1</td>
								<td>1</td>
								<td>$250.00</td>
								<td>Confirmed</td>
								<th>123-123-1</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

const MySearchs = function () {
	return (
		<div className="container">
			<div className="row">
				<div className="mg-feature col-md-12"> <h3> My Searches </h3> </div>
				<div className="col-md-12">
					<table className="table mb40">
						<thead>
							<tr>
								<th>#</th>
								<th>Guesthouse Name</th>
								<th>CheckIn</th>
								<th>CheckOut</th>
								<th>Bed</th>
								<th>Bath</th>
								<th>Actions </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>1.</th>
								<td>Apricot </td>
								<td>12th, December 2016</td>
								<td>25th, December 2016</td>
								<td>1</td>
								<td>1</td>
								<td>run search</td>
							</tr>
						</tbody>
					</table>
				</div>
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