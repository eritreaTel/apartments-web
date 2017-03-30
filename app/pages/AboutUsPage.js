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
						<p>Uganda offers some incredible apartments and guest houses to choose from. However the problem is most of these apartments lack internet visibility. You would need to actually be here to find a broker, spend a day or two looking at options, book the apartment and then move in. This can be an unbelievably overwhelming and tiresome experience, but that's where we come in. Our mission, to put it simply, is to do the heavy lifting for you. We go through the hundreds of apartments and guest houses, their availability, their ranking, the feedback of customers, and we will offer you the best choice, for the best price. All you need to do is click and Uganda Booking will find you a home away from home.</p>
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
						<p>How are we different? It is simple. We have a small yet exclusive business. We believe in being selective and are determined to ensure our customers are satisfied. We have offices both in San Francisco, USA, the technology hub of the world, and Kampala, Uganda, the center of all the information you need. This enables us to use the latest technologies to implement our first hand knowledge of guesthouses and apartments, resulting in up-to-date and reliable information. </p>
						<p>Apartment booking is not the only service we provide. Having an office in Uganda allows us to have a one to one relationship with the key players, meaning we can provide you with additional services including airport pickups, connecting with the right car rentals and tour guides. </p>
						<p>Seeing is believing, so take a look through the apartments and guesthouses on offer. From budget to luxury, we offer a number of different options to suit the needs of our visitors from around the globe.</p>
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
							<p>The reason we started Uganda Booking began with the personal experience of our founders, an experience we want to protect you from. Most apartments in Uganda aren't viewable online. And for someone coming to Uganda for the first time, they have to go through endless hassle to find the apartments they like for a price they can afford. Our goal is to make this the easiest part of your stay. To smooth the process we also offer car rentals and airport pickup services. </p>
                            <p>Our own experiences left us questioning the notion that finding accommodation in Uganda is never easy. And so that’s what we did. We made it easy.</p>
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
									<li><a target="_blank" href={member.fb_link}><i className="fa fa-facebook"></i></a></li>
									<li><a target="_blank" href={member.ld_link}><i className="fa fa-linkedin"></i></a></li>
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
				photo : "images/team-members/ugandaBooking-ceo.jpg",
				fb_link : "https://www.facebook.com/amanuelcp",
				ld_link : "https://www.linkedin.com/in/amanuel-yohannes-78287a17"
			},
			{
				"id" : 2,
				full_name: "Rafael Orozco",
				title: "Chief Technology Officer, CTO",
				photo : "images/team-members/ugandaBooking-cto.jpg",
				fb_link : "https://www.facebook.com/xylosoft",
				ld_link : "https://www.linkedin.com/in/rafaelorozco"
			},
			{
				"id" : 3,
				full_name: "Ruth Tekle",
				title: "Chief Operating Officer, COO",
				photo : "images/team-members/ugandaBooking-coo.jpg",
				fb_link : "https://www.facebook.com/ruta.tekle.96",
				ld_link : "#"
			},
			{
				"id" : 4,
				full_name: "Lizabeth Paulat",
				title: "Director of Content",
				photo : "images/member4.png",
				photo : "images/team-members/ugandaBooking-director-of-content.jpg",
				fb_link : "#",
				ld_link : "#"
			},
			{
				"id" : 5,
				full_name: "Rubanza Kenneth",
				title: "Sales Manager",
				photo : "images/team-members/ugandaBooking-sales-manager.jpg",
				fb_link : "https://www.facebook.com/kabuleeta.kenneth",
				ld_link : "https://www.linkedin.com/in/rubanza-kenneth-284b34139"
			},
			{
				"id" : 6,
				full_name: "Ruth Nakayima",
				title: "Sales Manager",
				photo : "images/team-members/ugandaBooking-sales-manager-2.jpg",
				fb_link : "#",
				ld_link : "#"
			},
			{
				"id" : 7,
				full_name: "Kibret Bereket",
				title: "Development Team Manager",
				photo : "images/team-members/ugandaBooking-director-of-development.jpg",
				fb_link : "https://www.facebook.com/kibret.bereket",
				ld_link : "#"
			}
		]
	};

	return props;
}

AboutUsPage.defaultProps = getDefaultProps();

module.exports = AboutUsPage;