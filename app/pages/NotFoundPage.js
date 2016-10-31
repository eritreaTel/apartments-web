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

function getDefaultProps() {
	let props = {
		teamMembers : [
			{
				full_name: "Amanuel Yohannes",
				title: "Chief Executive Officer, CEO",
				photo : "images/member1.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			},
			{
				full_name: "Rafael Orozco",
				title: "Chief Technology Officer, CTO",
				photo : "images/member2.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			},
			{
				full_name: "Ruth Tekle",
				title: "Chief Operating Officer, COO",
				photo : "images/member3.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			},
			{
				full_name: "Kenneth Ogali",
				title: "VP of Sales and Marketting",
				photo : "images/member4.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			}
		],
		partners: [
			{
				"full" : "images/part-logo-5.png",
				"caption" : "Partner Logo 5"
			},
			{
				"full" : "images/part-logo-6.png",
				"caption" : "Partner Logo 6"
			},
			{
				"full" : "images/part-logo-7.png",
				"caption" : "Partner Logo 7"
			},
			{
				"full" : "images/part-logo-8.png",
				"caption" : "Partner Logo 8"
			},
			{
				"full" : "images/part-logo-9.png",
				"caption" : "Partner Logo 9"
			},
			{
				"full" : "images/part-logo-5.png",
				"caption" : "Partner Logo 5"
			},
			{
				"full" : "images/part-logo-6.png",
				"caption" : "Partner Logo 6"
			},
			{
				"full" : "images/part-logo-7.png",
				"caption" : "Partner Logo 7"
			},
			{
				"full" : "images/part-logo-8.png",
				"caption" : "Partner Logo 8"
			},
			{
				"full" : "images/part-logo-9.png",
				"caption" : "Partner Logo 9"
			}
		],
		testimonials : [
			{
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Ruth Tekle",
				"title" 	: "Arch Software Solutions, CEO"
			},
			{
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Asmerom Haile",
				"title" 	: "BlueSoft, CEO"
			},
			{
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Habtom Beraki",
				"title" 	: "BlueGold, CEO"
			}
		]
	};

	return props;
}

module.exports = NotFoundPage;