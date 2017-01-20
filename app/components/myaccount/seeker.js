const React = require('react');

const BookingSection = function (props) {
	return(
		<div role="tabpanel" className="tab-pane fade in active" id="home3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deteriora bonis attingere optimus libero iam naturae graecam. Ceterorum vult ita populo augeri doceat probaretur ullo existimo incorruptis, reperietur assidua excepturi manum consule delectari, eumque sapientia arbitraretur muniti, contenta perveniri perinde satisfacit, ferri, contemnere parum seditione id, depravare futuros.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Privavisse percurri eximiae liberiusque audiam ipsius certae difficilius angore, numquid familiaritatem pedalis inflammat, gloriae sentiri triarius stoicos efficit poterimus, reformidans dubitemus, torquatum gratia calere legerint quos distinguique. Amici difficilem philosophis recta vero reliquerunt nostrum geometrica, discordia, iustius reformidans legendum crudeli, ornamenta hoc hominem unam aiebat metu. Correcta. Huius elaboraret optabilem legendam admodum, meminit sententia chremes, ille, utraque philosophorum morati disputari ferentur videantur sola quin primus ut, quale retinere memoriter susceperant. Earum errorem.</p>
		</div>
	);
}

const DealsSection = function () {
	return (
		<div role="tabpanel" className="tab-pane fade" id="profile3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proprius, oblivione commodi. Utriusque invenire, re beatae videro amicorum rationis inhumanus metuamus reliquisti epularum tempus. Pertinaces atque inveniri quorum efficeret statua audivi, dolere opus soluta concordia placuit metuque veritatis stultorum ita.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nascuntur eligendi morbis fuisse accusantibus. Dissentientium vera quadam delectu illa, comit hostem illas complectitur coniunctione poetis degendae caeco antiquis, vos, persecuti idem verbum nimis, veserim approbantibus acuti variis malo. Tantalo fecerit gessisse docti eiusdem gloriatur loqueretur igitur, subtilius. Huc. Pugnare exaudita inprobitatem comprehenderit cernimus inertissimae solitudo caeco sibi timiditatem, praeterierunt forte variari persequeretur tranquilli tite provincias inducitur, iustioribus viderer praebeat, huic molestiam intellegimus sitne populo, satisfacit expetendis principes noctesque emolumento regione, approbantibus.</p>
		</div>
	)
}

const EditProfileSection = function () {
	return (
		<div role="tabpanel" className="tab-pane fade" id="messages3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Isdem memoriter poenis succumbere nondum disserunt, consistat sinit pedalis fructu appellant tractavissent fames. Disciplinis virtus docendi res melius mandamus pacem afranius oratoribus. Fames divelli eventurum, detractis desistunt magnis fortasse alii approbantibus, tantalo conducunt disputatum pertineant detractis verentur clarorum ceteris epicuri.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inimicus explicari doctrinis conficiuntur eitam intuemur omnibus cui. Efficerent choro temperantia artibus tranquillitatem gravissimo. Servire magistra concursio meminit explentur facta, vivendi verbum utamur vituperatum vitiis. Alienae singulos. Terrore utuntur constituant, lineam sapientiam velim m sensu concordia repetitis nacti. Summam nomine ante voluptatem gaudere reiciendis, ita aequi tueri cepisse platonem, unde antiquis certamen sensum inanes, inprobis habendus crudeli, disciplina volunt certa polyaeno variis solemus. Ruant servare elaboraret cadere faciendi tempus, ortum accusantium partis.</p>
		</div>
	);
}


class Seeker extends React.Component {
	render() {
			return (
				<div className="mg-tab-left-nav">
					<ul className="nav nav-tabs nav-justified" role="tablist">
						<li role="presentation" className="active">
							<a href="#home3" aria-controls="home3" role="tab" data-toggle="tab"><i className="fa fa-home"></i> Bookings</a>
						</li>
						<li role="presentation">
							<a href="#profile3" aria-controls="profile3" role="tab" data-toggle="tab"><i className="fa fa-user"></i> Deals</a>
						</li>
						<li role="presentation">
							<a href="#messages3" aria-controls="messages3" role="tab" data-toggle="tab"><i className="fa fa-pencil"></i> Edit Profile</a>
						</li>
						<li role="presentation">
							<a href="#settings3" aria-controls="settings3" role="tab" data-toggle="tab"><i className="fa fa-cogs"></i> Travel Guides</a>
						</li>
					</ul>

					<div className="tab-content">
						<BookingSection />
						<DealsSection />
						<EditProfileSection />
						<div role="tabpanel" className="tab-pane fade" id="settings3">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perpaulum, contentam eximiae leniter efflorescere, quia mollitia, loco ficta habeat ii persecuti assidua ceterorum albucius, caret perpetuam artes sive philosopho aperiam corpore, insequitur pluribus delicata indoctum minuit res efficeret assecutus affert iuste, proficiscuntur.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nominavi domesticarum maioribus malivoli motus contereret satis dedocere. Aptior probo calere saperet eosdem amatoriis morbos corpora una, debilitatem ignota dicunt hae lectorem statuerunt, graeci animadvertat multis declinationem divitias tuum responsum velim scipio. Delectus tria convincere tradit satis, errorem addidisti facultas, oblivione arare in curiosi libris deserere, eodem sustulisti ipsos voluptaria veniam cohaerescent, perspicuum, diesque unam suscipere naturae, virtus nasci pauca dubitat graecam voluit intellegimus improborum aiunt ponit. Docere habeatur utilitas, dicturum silano.</p>
						</div>
					</div>
				</div>
			);
	}
};

module.exports = Seeker;