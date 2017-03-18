import React from 'react';

class HRCharacterIndicator extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			model: props.model
		};

		this.staticStyles = {
			barWrapper: {
				width: String(this.props.stepPercentage / 2) + "%",
				marginLeft: String(-1 * (this.props.stepPercentage / 4)) + "%",
				left: String(this.props.stepPercentage * (this.state.model.totals.baselineScore + 1)) + "%"
			},

			barFader: {
				transformOrigin: String(this.state.model.totals.baselineScore * 100 / this.props.totalRange) + "% 50%"
			},

			barFaderSolid: {
				transform: "scale(" + String(this.props.totalRange * 2 + 5) + ", 1)"		
			}
		};
	}

	generateClassString() {

		let classes = Array();
		classes.push('indicator');
		
		if(this.props.isYou) {
			classes.push('you');
		} else {
			classes.push(' color-' + this.props.color);
			classes.push(' variant-' + this.props.variant);

			for(attr in this.state.model.attributes) {
				let attribute = this.state.model.attributes[attr];
				classes.push(attr + " " + attribute.toLowerCase().replace(/ /g,"-"));
			}
		}

		classes.push(this.state.model.currentScore > this.state.model.baselineScore ? 'positive' : 'negative');

		return classes.join(' ');
	}

	render() {

		// because the bar wrapper is half the width of a full step
		let relativeOffset = 2 * (Math.abs(this.state.model.totals.currentScore - this.state.model.totals.baselineScore));
		
		// because the scale factor needs to be at least one
		// and it needs to compensate for the offset of the bar wrapper
		relativeOffset === 0 ? relativeOffset = 1 : relativeOffset += .5;

		let absoluteOffset = ((this.state.model.totals.currentScore + 1) * this.props.stepPercentage);

		return(
			<div className={this.generateClassString()}>
				<div className="indicator-bar-wrapper"
						style ={this.staticStyles.barWrapper}
				>
					<div className="indicator-bar-fader"
							style ={this.staticStyles.barFader}
					/>
					<div className="indicator-bar"
							style={{
								transform: 'scale('+ String(relativeOffset) + ', 1)'
							}}
					></div>
					<div className="indicator-bio">
						<div className="name"></div>
						<div className="bio-attributes">
						{
							Object.keys(this.state.model.attributes).map((key) => {
								let bAttribs = this.state.model.bioAttributes;
							
								// var answerObj = HorseRace.Util.findObjectInArray(attributeProps.choices, 'normalizedAnswer', newValue);
								// var prettyAnswer = answerObj.verboseAnswer ? answerObj.verboseAnswer : answerObj.text;
								let prettyAnswer = 'foo';

								return(<div className={key}>{prettyAnswer}</div>);
							})
						}
						</div>
					</div>
				</div>
				<div className="indicator-dot-wrapper"
						style={{
							transform: 'translate('+ String(absoluteOffset) + '%, 0%)'
						}}
				>
					<div className="indicator-dot">
						{this.state.model.isYou ? 'you' : ''}
				 	</div>
				</div>
				<div className="indicator-score">
					{this.state.model.currentScore}
				</div>
			</div>
		);
	}
}

export default HRCharacterIndicator;
