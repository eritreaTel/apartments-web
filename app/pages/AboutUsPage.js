const React = require('react');
const PageTitle = require('../components/shared/pageTitle');


const AboutUgandaGuestHouse = function () {
	return (
		<div className="mg-about-features">
			<div className="container">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="mg-sec-title">
							<h2>Our Mission</h2>
							<p>Find great apartments, literally home away from home</p>
						</div>
						<p>The place you call home is important and we at Apartment List understand that. Searching for an apartment to call home is hard and it’s an incredibly big decision. The majority of your time is spent at home and it’s your largest monthly expense. We get that.</p>
						<p>Our mission is simple, we want you to be able to find a great home and we want that process to be simple and delightful. In one word, we want your experience and apartment search to be extraordinary.</p>
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
						<p>The experience we provide you is different than any other rental experience out there. It starts from our own experiences - both positive and negative - with finding the perfect home. From the start we get to know you, asking the important questions about YOUR search and what matters most to YOU.</p>
						<p>Once we know what you care about, we build a personalized set of recommendations that match both exactly what you asked for and show you the best other options that maybe you hadn’t thought to consider. Our goal, do all the hard work for you and make finding your great next home easy.</p>
						<p>And once you’ve found that home, you can count on the pricing, photos and extra amenities to be accurate and verified. Every one of our featured listings was researched and curated by an Apartment List team member and most importantly the pricing and availability is checked multiple times per day, coming directly from property itself.</p>
						<p>We’ve worked really hard so your experience booking guest house with UgandaBooking will be extraordinary.</p>
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
							<p>Our founder Amanuel Yohannes  have had miserable, horrible, no good, very bad guest house booking experiences in Uganda. Amanuel was introduced to the “bait and switch” by NYC brokers when trying to rent his first apartment out of college and Chris moved 5 times in 5 different cities over the course of 6 years. What became clear to them over this time was how broken the rental search process was. So in September of 2011, they set out to build an experience that would take the pain out of moving and make finding their next home easy.</p>

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
								<img src={member.photo} alt="" className="img-responsive"/>
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
						<div className="col-md-12">
							<div className="mg-sec-title">
								<h2>Our Staff</h2>
							</div>
						</div>
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
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
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
 				full_name: "Emanuel Johannes",
				title: "Chief Executive Officer, CEO",
				photo : "images/team-member/amanuel_yohannes.jpg",
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