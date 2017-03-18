import React from 'react';
import ReactDOM from 'react-dom';

//import injectTapEventPlugin from 'react-tap-event-plugin';

import {interviewQuestions, quizQuestions} from './questions';

import TitleBar from './TitleBar';
import PrivilegeHomePage from './PrivilegeHomePage';
import HorseRace from './HorseRace/HorseRace';

require('./css/global.desktop.scss');
require('./css/global.mobile.scss');

//injectTapEventPlugin();

export default class Privilege extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showHomePage: false, // should be true
			showAboutBox: false
		};
	}

	startQuiz() {
		this.setState({showHomePage: false});
	}

	toggleAboutBox(evt, hideOnly) {
		evt.stopPropagation();

		let show = hideOnly ? false : !this.state.showAboutBox;
		this.setState({ showAboutBox: show });
	}

	render() {

		return(
			<div className='wrapper'
					onClick={ (evt) => this.toggleAboutBox(evt, true) }
			>	
				<TitleBar
					showAboutBox = { this.state.showAboutBox }
					aboutBoxHandler = { (evt) => this.toggleAboutBox(evt, false) }
				/>
				{this.state.showHomePage
					?
						<PrivilegeHomePage
							startQuizHandler={() => this.startQuiz()}
						/>
					:
						<HorseRace
							introQuestions={interviewQuestions}
							quizQuestions={quizQuestions}
							quizQuestionLimit={20}
							db={{
								server: "http://www.privilege.is:5984",
								dbName: "privilege",
								designDoc: "horserace",
							}}
						/>
				}
			</div>
		);
	}
}

ReactDOM.render(<Privilege/>, document.getElementById('privilege-react-root'));