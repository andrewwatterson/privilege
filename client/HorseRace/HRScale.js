import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';

import hrH from './util/HRHelpers';

import HRCharacterIndicator from './HRCharacterIndicator';

class HRScale extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			model: props.model
		};

		this.possibleColors = 4;
		this.avatarVariants = 3;

		let totalSteps = this.state.model.totalRange + 2;
		this.stepPercentage = (1 / totalSteps) * 100;
	}

	renderIndicators() {
		let count = 0;

		return _.map(this.state.model.characters, (character, key) => {

			let color, variant;

			if(key !== 'you') {
				color = (count % this.possibleColors) + 1;
				variant = Math.floor(Math.random() * this.avatarVariants) + 1;

				count++;	
			}
			
			return(
				<HRCharacterIndicator
					key={key}
					model={character}
					isYou={key === 'you'}
					color={color}
					variant={variant}
					stepPercentage={this.stepPercentage}
				/>
			);
		});
	}

	render() {

		let indicators = this.renderIndicators();

		return(
			<div className="scale-wrapper"
					onTransitionEnd={this.props.onTransitionEnd}>
				<div className="scale">
					<div className="scale-steps">
						<div className="scale-step bumper"></div>
						{
							[...Array(this.state.model.totalRange)].map((noop, i) => {
								return(
									<div
										key={i}
										className="scale-step"
									></div>
								);
							})
						}
						<div className="scale-step bumper"></div>
					</div>
					<ReactCSSTransitionGroup
						component="div"
						className={'indicators desktop'}
						{...hrH.enterTransitionOptions}
					>
						{indicators}
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
						component="div"
						className={'indicators mobile'}
						{...hrH.enterTransitionOptions}
					>
						{indicators}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}
}

export default HRScale;