const React = require('react');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

class NotFoundPage extends React.Component {

	render() {
		return (
			<div className="mg-page-title parallax">
				<div className="mg-page">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mg-404-error-txt">
									<div className="mg-404-badg pull-left">
										<strong>404</strong>
										<span>Error</span>
									</div>
									<div className="mg-404-txt-search">
										<strong>Sorry, Your requested page is not found.</strong>
										<p>Please feel free to contact us by clicking this <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>link</Anchor> if you think this should not exist.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
	}
};

module.exports = NotFoundPage;