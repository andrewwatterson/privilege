import React from 'react';

class PrivilegeHomePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			
		};

		this.currentChaser = -1;

		this.chaserContent = [
			"not having to think about your race.",
			"a healthy body and a happy brain.",
			"an education that gets you the life you want.",
			"not needing to come out to your parents.",
			"not having to explain your experience.",
			"the \"easy mode\" in the video game of life."
		];

		this.chaser = null;
	}

	chaserCallback(el) {
		if(el) {
			this.chaser = setInterval(() => {
				el.style.top = -100 * (++this.currentChaser % this.chaserContent.length) + '%';
			}, 3000);
		} else {
			clearInterval(this.chaser);
		}	
	}

	renderAvatars(num) {

		const avatarProfiles = [
			{'gender': 'male', 'race': 'nonwhite'},
			{'gender': 'female', 'race': 'white'},
			{'gender': 'female', 'race': 'nonwhite'},
			{'gender': 'male', 'race': 'white'}
		];

		let avatarsArr = new Array();

		for(let i = 0; i < Math.min(avatarProfiles.length, num); i++) {

			let classes = new Array();

			classes.push('color-' + String(i + 1));
			classes.push('variant-' + Number(Math.floor(Math.random() * 3) + 1));
			classes.push('gender-' + avatarProfiles[i]['gender']);
			classes.push('race-' + avatarProfiles[i]['race']);

			avatarsArr.push(
				<div className={'avatar ' + classes.join(' ')} key={i}>
					<div className="indicator-dot"></div>
				</div>
			);

		}

		return avatarsArr;

	}

	renderButton() {
		return(
			<div className="button"
					onClick={this.props.startQuizHandler}>
				Check My Privilege
			</div>
		);
	}

	render() {

		return(
			<div className="slide">
				<div className="inner title-slide desktop">
					<div className="avatars">
						{this.renderAvatars(4)}
					</div>
					<div className="chaser-wrapper">
						<div className="chaser-fixed">Privilege is </div>
						<div className="chaser-frame">
							<div className="chaser-inner"
									ref={(el) => this.chaserCallback(el)}
							>
							{
								this.chaserContent.map((headline, i) => {
									return(<div key={i}>{headline}</div>);
								})
							}
							</div>
						</div>
					</div>
					<p>
						We hear a lot about our privilege &ndash; the set of hidden benefits
						that affect how people see and treat us. Skin color, education, sexuality,
						family wealth, and gender can all contribute to our privilege.
					</p>
					<p>
						Talking about it can be uncomfortable since it sometimes feels like you did
						something unfair to get where you are today. But that&rsquo;s just it &ndash;
						privilege has nothing to do with what you&rsquo;ve done and everything to do with
						how you were born.
					</p>
					<p>
						<strong>Find out how the privileges you&rsquo;ve experienced compare to people
						like &ndash; and unlike &ndash; you.</strong>
					</p>
					{this.renderButton()}
				</div>
				<div className="inner title-slide mobile">
					<div className="learn-more">
						<div className="learn-more-label">Learn More</div>
						<div className="about-icon">i</div>
					</div>

					<div className="avatars">
						{this.renderAvatars(3)}
					</div>

					<div className="logo">Privilege<span className="tld">.is</span></div>

					<p>
						Find out how the privileges you&rsquo;ve experienced compare to people
						like &ndash; and unlike &ndash; you.
					</p>
					{this.renderButton()}
				</div>
			</div>
		);
	}
}

export default PrivilegeHomePage;