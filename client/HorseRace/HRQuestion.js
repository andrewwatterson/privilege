import _ from 'lodash';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class HRQuestion extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			locked: false,
			chosenAnswer: null
		}
	}

	buttonClick(key, value) {
		if(!this.state.locked) {
			this.setState({
				locked: true,
				chosenAnswer: value
			});

			this.props.questionAnswerFunction(key, value);
		}
	}

	render() {

		console.log(this.state.chosenAnswer);

		return(
			<div className={'slide question' + (this.state.locked ? ' locked' : '')}>
				<div className="inner">
					<div className="question-text">
						{this.props.question.q}
					</div>
					<div className={'question-answers'}>
						{
							_.map(this.props.question.choices, (answerText, answerKey) => {
								return(
									<div
										className={'button' + (this.state.chosenAnswer === answerKey ? ' on' : '')}
										onClick={() => this.buttonClick(this.props.question.key, answerKey)}
										key={answerKey}
									>
										{answerText}
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}