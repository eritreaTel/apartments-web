const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const {assetPath} = require('../helpers/asset_helper');


const AboutUgandaGuestHouse = function () {
	return (
		<div className="mg-about-features">
			<div className="container">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="mg-sec-title">
							<h2>Our Mission</h2>
							<p>Find you the greatest apartments ever, your home away from home experience</p>
						</div>
						<p>Uganda offers lots and lots of apartments and guest houses to choose from. And what’s more, most of these apartments lack Internet visibility. You would need to actually be there to book one or find a broker to do it for you. And this can be an unbelievably overwhelming and tiresome experience, but thats where we came in. Our mission, to put in simple words, is to do the heavy work for you. We will go through these hundreds of guest houses, their availability, their ranking, the feedback of customers that have actually being there and we will offer you the best choice, for the best price. All you need to do is just click, not leaving the comforts of your own home and trust us, we will provide you the best apartment that fits you. </p>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
	);
}


const WeAreDifferent = function () {
	return (
		<div className="mg-about-features">
			<div className="container">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="mg-sec-title">
							<h2>We Are Different</h2>
						</div>
						<p>How are we different? It is simple. We have a small yet exclusive business, we offer our clients all the attention they need. We believe in being selective and are determined to make our clients very happy. We have offices both in San Francisco, USA, the technology hub of the world and Kampala, Uganda, the center of all the information you need. This enables us to use the brand-new and latest technologies, to implement our first hand knowledge of the apartments, resulting in the most reliable and latest information ever.</p>
						<p>Apartment booking is not the only service we provide. Having an office in Uganda enables us to have a one to one relationship with the key players, this in turn allows us to provide you with additional services including airport pickups, connecting with the right car rentals and tour guides.</p>
						<p>Seeing is believing, so come and see us. We aim to please and you will be definitely pleased. </p>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
	);
}

const HowWeGotStarted  = function () {
	return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-10">
							<div className="mg-sec-title">
								<h2>How We Got Started</h2>
							</div>
							<p>The reason behind the starting of all this is very simple and clear. A personal experience of our founders, an experience we are trying to protect you from. Most apartments in Uganda don’t have Internet visibility. And for someone coming to Uganda for the first time, they have to first come to Uganda, then start the process. They usually have to hassle a lot to find the apartments they like for the best deal they can get, changing from one apartment to another, struggling with reliable car rentals and airport pickup services. This made us think it could all have been easy, and that’s what we did. We made it easy.</p>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</div>
	);
}


const OurStaff = function (props) {
	const styledTeams =props.teamMembers.map(member => {
			return  <div className="col-md-3 col-sm-6" key={member.id}>
						<div className="mg-team-member">
							<figure>
								<img src={assetPath(member.photo)} alt="" className="img-responsive"/>
							</figure>
							<div className="mg-team-member-overlayer"></div>
							<div className="mg-team-info">
								<h3>{member.full_name}</h3>
								<strong>{member.title}</strong>
								<ul className="mg-team-member-social">
									<li><a href={member.fb_link}><i className="fa fa-facebook"></i></a></li>
									<li><a href={member.tw_link}><i className="fa fa-twitter"></i></a></li>
									<li><a href={member.ld_link}><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
			});

	return (
			<div className="mg-team pb70">
				<div className="container">
					<div className="row">
						<div className="col-md-1"/>
						<div className="col-md-10">
							<div className="mg-sec-title">
								<h2>Our Staff</h2>
								<p> List of our executive stuff </p>
							</div>
						</div>
						<div className="col-md-1"/>
					</div>
					<div className="row">
						{styledTeams}
					</div>
				</div>
			</div>
	);
}




class AboutUsPage extends React.Component {

	render() {
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<AboutUgandaGuestHouse />
				<WeAreDifferent />
				<HowWeGotStarted />
				<OurStaff teamMembers = {this.props.teamMembers} />
			</div>
		);
	}
};

function getDefaultProps() {
	let props = {
		teamMembers : [
			{
				"id" : 1,
 				full_name: "Amanuel Yohannes",
				title: "Chief Executive Officer, CEO",
				photo : "images/team-members/amanuel_yohannes.jpg",
				fb_link : "https://www.facebook.com/amanuelcp",
				tw_link : "#",
				ld_link : "#"
			},
			{
				"id" : 2,
				full_name: "Rafael Orozco",
				title: "Chief Technology Officer, CTO",
				photo : "images/member2.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			},
			{
				"id" : 3,
				full_name: "Ruth Tekle",
				title: "Chief Operating Officer, COO",
				photo : "images/member3.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			},
			{
				"id" : 4,
				full_name: "Kenneth Ogali",
				title: "VP of Sales and Marketting",
				photo : "images/member4.png",
				fb_link : "#",
				tw_link : "#",
				ld_link : "#"
			}
		]
	};

	return props;
}

AboutUsPage.defaultProps = getDefaultProps();

module.exports = AboutUsPage;