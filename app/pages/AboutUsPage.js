const React = require('react');
const PageTitle = require('../components/shared/pageTitle');


const AboutUgandaGuestHouse = function (props) {
	return (
		<div className="mg-about-features">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="mg-about-us-txt">
							<div className="mg-sec-title">
								<h2>About Uganda GuestHouses</h2>
								<p>Find great apartments, literally home away from home</p>
							</div>
							<p>GuestHouses Uganda top mission is to give visibility to many great guest houses in Uganda to the outside world. By doing so, we will promote tourism in Uganda by making  it easy to reserve guest house in Uganda. One of the first things a tourist does when traveling to a country is finding accommodation. We want to make this process as pleasant as possible while making sure the tourist gets the best deal on the market. We want tourists to get the best out of their stay. Guesthouses are less boring than hotel and it has home feeling. TODO-Amanuel, make this good.</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="video-responsive">
							<iframe src="https://player.vimeo.com/video/134008155" width="500" height="281" frameBorder="0"  allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

class Testomonials extends React.Component{
	componentDidMount() {
		$("#mg-testimonial-slider").owlCarousel({
			navigation : true,
			singleItem : true,
			pagination: false,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			transitionStyle : "backSlide"

		});
	}

	render() {
		const styledTestomonials = this.props.testimonials.map(testimonial => {
			return 	<blockquote key={testimonial.id}>
						<p>{testimonial.body}</p>
						<footer>{testimonial.full_name}, {testimonial.title}</footer>
					</blockquote>
		});

		return (
			<div className="mg-about-testimonial parallax">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="mg-sec-title">
								<h2>Testimonials</h2>
								<p>Here is some valuable word from our clients</p>
							</div>
							<div className="mg-testimonial-slider" id="mg-testimonial-slider">
								{styledTestomonials}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
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
								<p>The below is list of our executive staff </p>
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

class OurClients extends React.Component {

	componentDidMount() {
		$("#mg-part-logos-full").owlCarousel({
			items : 5,
			navigation : true,
			pagination: false,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

		});
	}

	render() {
		const styledLis = this.props.partners.map(apt => {
			return  <li key={apt.id}><img src={apt.full} alt={apt.caption}/></li>
		});

		return (
			<div className="mg-about-clients">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<ul className="mg-part-logos-full" id="mg-part-logos-full">
								{styledLis}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



class AboutUsPage extends React.Component {

	render() {
		return (
			<div>
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
				<AboutUgandaGuestHouse />
				<Testomonials  testimonials = {this.props.testimonials} />
				<OurStaff teamMembers = {this.props.teamMembers} />
				<OurClients partners={this.props.partners} />
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
				photo : "images/member1.png",
				fb_link : "#",
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
		],
		partners: [
			{
				"id" : 1,
				"full" : "images/part-logo-5.png",
				"caption" : "Partner Logo 5"
			},
			{
				"id" : 2,
				"full" : "images/part-logo-6.png",
				"caption" : "Partner Logo 6"
			},
			{
				"id" : 3,
				"full" : "images/part-logo-7.png",
				"caption" : "Partner Logo 7"
			},
			{
				"id" : 4,
				"full" : "images/part-logo-8.png",
				"caption" : "Partner Logo 8"
			},
			{
				"id" : 5,
				"full" : "images/part-logo-9.png",
				"caption" : "Partner Logo 9"
			},
			{
				"id" : 6,
				"full" : "images/part-logo-5.png",
				"caption" : "Partner Logo 5"
			},
			{
				"id" : 7,
				"full" : "images/part-logo-6.png",
				"caption" : "Partner Logo 6"
			},
			{
				"id" : 8,
				"full" : "images/part-logo-7.png",
				"caption" : "Partner Logo 7"
			},
			{
				"id" : 9,
				"full" : "images/part-logo-8.png",
				"caption" : "Partner Logo 8"
			},
			{
				"id" : 10,
				"full" : "images/part-logo-9.png",
				"caption" : "Partner Logo 9"
			}
		],
		testimonials : [
			{
				"id"        : 1,
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Ruth Tekle",
				"title" 	: "Arch Software Solutions, CEO"
			},
			{
				"id"        : 2,
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Asmerom Haile",
				"title" 	: "BlueSoft, CEO"
			},
			{
				"id"        : 3,
				"body" 		: "The best company on the word, do your self a favour and use their services. The best company on the word, do your self a favour and use their services. The best company on ...",
				"full_name" : "Habtom Beraki",
				"title" 	: "BlueGold, CEO"
			}
		]
	};

	return props;
}

AboutUsPage.defaultProps = getDefaultProps();

module.exports = AboutUsPage;