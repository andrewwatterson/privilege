import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./css/HorseRace.desktop.scss');
require('./css/HorseRace.mobile.scss');

import hrH from './util/HRHelpers';

import HRModel from './model/HRModel';

import HRQuestion from './HRQuestion';
import HRInfoBar from './HRInfoBar';
import HRScale from './HRScale';

export default class HorseRace extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

			stage: 'add-scale',
			//add-scale, add-character, intro-question, start-quiz, quiz.question, after-quiz

			model: new HRModel({
				introQuestions: props.introQuestions,
				quizQuestions: props.quizQuestions,
				quizQuestionsLimit: props.quizQuestionsLimit,
				db: props.db
			})

		};

		this.stages = {
			'add-scale': {
				scaleTransitionEnd: () => {

					let newModel = _.clone(this.state.model);
					newModel.addCharacter('you');

					this.setState({
						stage: 'add-character',
						model: newModel
					});
				}
			},
			'add-character': {
			}
		}

		// initialize the attributes we want each character to have
		// this.introQs.forEach(function(attribute, i, arr) {
		// 	if(attribute.key) { HorseRace.Character.registerAttribute(attribute.key, attribute); }
		// });
	}

	answerQuestion(question, choice) {

		thisRace.scale.characters['you'].recordAnswer(question.key, answer.normalizedAnswer);		
		
		for(c in thisRace.scale.characters) {

			var theChar = thisRace.scale.characters[c];

			// find the characters' answer in the question array
			// add the scaleEffect to their score
			var characterAnswer = HorseRace.Util.findObjectInArray(	question.choices,
																	'normalizedAnswer',
																	theChar.questions[question.key]
																  );
			if(characterAnswer) {
				//console.log(c, 'has answer', characterAnswer.text, 'so moving scale', characterAnswer.scaleEffect)
				theChar.currentScore += characterAnswer.scaleEffect;
			}
		}

		//thisRace.commitToDatabase();

		callback.call(thisRace);
	}

	render() {

		/*********************************************************/
		/* Add in React Routing so #results goes to results mode */
		/*            or parse querystring                       */
		/*********************************************************/

		return(
			<ReactCSSTransitionGroup
				component="div"
				className={
					'horserace horserace-wrapper'
					+ ' ' + this.state.stage	
				}
				{...hrH.appearTransitionOptions}
			>
				<div className="main-content">
					<div className="slides-wrapper">
						<HRQuestion
							question={'bar'}
							questionAnswerFunction={null}
						/>
					</div>
					<HRInfoBar
						content={'foo'}
					/>
				</div>

				<HRScale
					model={this.state.model}
					onTransitionEnd={this.stages[this.state.stage].scaleTransitionEnd}
				/>
			</ReactCSSTransitionGroup>
		);
	}
}

HorseRace.prototype.startQuiz = function() {


	$(this.bottomContent).bind('transitionend', function(evt) {
		if(evt.eventPhase == 2
			&& evt.originalEvent.propertyName == 'opacity') { 	// janky, but this fires on
																// both flex-grow (and prefix'd)
																// and opacity, and we just want one
			thisRace.startNextQuizStep();
		}
	});

	HorseRace.startAnimation(this.questionWrapper);
}

HorseRace.prototype.startNextQuizStep = function() {

	var Qs, currentStep, finishFn;

	if(this.currentPhase == 'intro') {
		Qs = this.introQs;
		currentStep = this.currentIntro;
		finishFn = this.finishIntroStep;
	}

	if(this.currentPhase == 'quiz') {
		Qs = this.quizQs;
		currentStep = this.currentQuestion;
		finishFn = this.finishQuizStep;
	}

	if(Qs.length - 1 > currentStep) {
		// if we've still got steps yet, wire up the next step

		var step = Qs[++currentStep];

		// write the values back out after incrementing
		if(this.currentPhase == 'intro') { this.currentIntro = currentStep; }
		if(this.currentPhase == 'quiz') { this.currentQuestion = currentStep; }

		if(step.q) {
			// if this step has a question
			this.switchQuestion(step, finishFn);
		
			HorseRace.startAnimation(this.questionWrapper, null);
		} else {
			finishFn.call(this);
		}	

	} else {
		// if no questions left...

		if(this.currentPhase == 'intro') {

			for(character in this.scale.characters) {
				if(!this.scale.characters[character].isYou) {
					var theRace = this;
					this.fetchResultsByProfile(this.scale.characters[character].attributes, function(returnedData) {
						theRace.scale.characters[character].recordObjectOfAnswers(returnedData);
					});
				}
			}

			// figure out how to get bio stuff to hide again
			HorseRace.startAnimation($(".indicator-bio"));
			
			this.currentPhase = 'quiz';
			this.startNextQuizStep();
		
		} else if(this.currentPhase == 'quiz') {
			// show results screen
		}
	}
}

function setUpQuestionAnswerAnimation(infoText) {
	resetWrapperClass('question-answer-step');

	populateInfoBar('', infoText);

	// set up the info text to fade in after whatever
	// delay we've specified in the CSS
	startAnimation('.info-bar', function() {
		// do something after the info text fades in
		redrawAllIndicators();

		// it'd be nice to chain the following to the
		// indicators moving, but since they don't always
		// move we have to chain it to something we know is changing
		startAnimation('.info-bar', function() {
			// switch the question
			if(!nextQuestion()) {
				setUpFinalScreenAnimation();
			}
		});
	});
}

HorseRace.startTransition = function(jqSelector, callback) {
	$(jqSelector)
		.unbind(HorseRace.transitionEndName)
		.bind(HorseRace.transitionEndName, function(evt) {
			if(evt.eventPhase == 2)

				if(callback) { callback(evt); }
		})
		.addClass('on');	
}

HorseRace.startAnimation = function(jqSelector, callback) {
	$(jqSelector)
		.unbind(HorseRace.animationEndName)
		.bind(HorseRace.animationEndName, function(evt) {
			if(evt.eventPhase == 2)
				$(evt.target)
					.toggleClass('transitioning on');

				if(callback) { callback(evt); }
		})
		.addClass('transitioning');	
}