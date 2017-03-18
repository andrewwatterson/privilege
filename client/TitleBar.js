import React from 'react';

class TitleBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return(
			<div className="header">
				<div className="logo">Privilege<span className="tld">.is</span></div>
				<div className="learn-more"
						onClick = { this.props.aboutBoxHandler } >	
					<div className="learn-more-label">Learn More</div>
					<div className="about-icon">i</div>
				</div>
				{
					this.props.showAboutBox
						?
							<div className="about-box">
								<div className="about-section privacy">
									<h3>Privacy</h3>
									<p>Your responses on Privilege.is will only be associated with the demographic information you provide and a random number we choose for you to detect duplicate responses.</p>
									<p>Your responses will be averaged with all others that share your demographic traits and those averages will be shown to other users taking the quiz.</p>
								</div>
								<div className="about-section about">
									<h3>About</h3>
									<p>This site was designed by <a href="http://www.andrewwatterson.com" target="_blank">a gay white guy</a> from San Francisco after he saw <a href="http://www.buzzfeed.com/dayshavedewi/what-is-privilege" target="_blank">this BuzzFeed video</a>.</p>
									<p>If you have an idea for a new question that highlights a type of privilege we missed, let us know.</p>
								</div>
							</div>
						:
							''
				}
			</div>
		);
	}
}

export default TitleBar;