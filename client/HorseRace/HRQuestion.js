import React from 'react';

export default class HRQuestion extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			locked: false
		}
	}

	buttonClick(question, answer) {
		if(!this.state.locked) {
			this.setState({locked: true});
		}

		// add the class "on" to the chosen response

		this.props.questionAnswerFunction();
	}

	render() {

		console.log(this.props.question);

		return(
			<div className="slide question">
				<div className="inner">
					<div className="question-text">
						{this.props.question.q}
					</div>
					<div className={'question-answers' + (this.state.locked ? ' locked' : '')}>
						{
							this.props.question.choices.map((choice, i) => {
								return(
									<div className="button">
										{choice.text}
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