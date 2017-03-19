import _ from 'lodash';

//import hrH from '../util/HRHelpers';

import HRDatabase from './HRDatabase';
import HRCharacterModel from './HRCharacterModel';

export default class HRModel {

	constructor(props) {

		this.askDbFor = new HRDatabase(props.db);

		this.introQs = props.introQuestions;
		this.questionLibrary = props.quizQuestions;
		this.quizQuestionsLimit = props.quizQuestionsLimit;
		this.quizQs = this.pickQuestionsForQuiz();
		this.questionSequence = Array();
		this.setUpQuestions();

		
		this.totalRange = 0;
		this.baselineScore = 0;
		this.createScale();

		this.characters = Object();

		this.availableProfiles = this.askDbFor.availableProfiles();

		//this.currentQuestion = {stage: 'intro', index: 0};
		this.currentQuestion = 0;
	}

	getCharacterAttributes() {
		return _.map(this.introQs, (value, index, collection) => {
			return value.key;
		});
	}

	isCharacterAttribute(key) {
		return this.getCharacterAttributes().indexOf(key) !== -1;
	}

	setUpQuestions() {

		this.questionSequence = _.concat(this.introQs, this.quizQs);
	}

	pickQuestionsForQuiz() {

		return _.chain(this.questionLibrary)
				.shuffle()
				.slice(0, this.quizQuestionLimit || _.size(this.questionLibrary))
				.value();
	}

	moveToNextQuestion() {
		if(this.questionSequence.length < this.currentQuestion + 1) {
			this.currentQuestion++;
		} else {
			// do something that triggers the quiz to be over
		}
	}

	getQuestionObject() {

		return this.questionSequence[this.currentQuestion];
	}

	recordAnswer(character, key, value) {
		if(this.isCharacterAttribute(key)) {
			this.characters[character].setAttribute(key, value);
		} else {
			this.characters[character].setAnswer(key, value);
		}
	}

	// getQuestionObject() {
	// 	// this function assumes we haven't specified an out of bounds question in
	// 	// this.moveToNextQuestion()
	// 	if(this.currentQuestion.stage === 'intro') {
	// 		return this.introQs[this.currentQuestion.index];
	// 	} else if (this.currentQuestion.stage === 'quiz') {
	// 		return this.quizQs[this.currentQuestion.index];
	// 	}
	// }

	// moveToNextQuestion() {

	// 	let nextIsInBounds = function(arr, curIndex) { return arr.length < curIndex + 1; }

	// 	if(this.currentQuestion.stage === 'intro') {
	// 		if(nextIsInBounds(this.introQs, this.currentQuestion.index)) {
	// 			this.currentQuestion.index++;
	// 		} else {
	// 			this.currentQuestion = {stage: 'quiz', index: 0};
	// 		}
	// 	} else if (this.currentQuestion.stage === 'quiz') {
	// 		if(nextIsInBounds(this.quizQs, this.currentQuestion.index)) {
	// 			this.currentQuestion.index++;
	// 		} else {
	// 			// do something that triggers the quiz to be over				
	// 		}
	// 	}
	// }



	createScale() {

		// calibrate the baselineScore so that nobody can
		// fall off either end of the scale
		for(let question in this.quizQs) {

			let getScaleEffectFromChoice = (choice) => { return choice.scaleEffect; }

			let minChoiceObj = _.minBy(this.quizQs[question].choices, getScaleEffectFromChoice);
			let maxChoiceObj = _.maxBy(this.quizQs[question].choices, getScaleEffectFromChoice);

			let minChoice = getScaleEffectFromChoice(minChoiceObj);
			let maxChoice = getScaleEffectFromChoice(maxChoiceObj);

			this.totalRange += (maxChoice + Math.abs(minChoice));
			this.baselineScore += Math.abs(minChoice);
		}
	}

	addCharacter(key) {
		let characterProfileData = {};

		characterProfileData.baselineScore = this.baselineScore;
		characterProfileData.stepPercentage = this.stepPercentage;

		// var charsSize = Object.keys(this.characters).length;

		// characterProfileData.color = ((charsSize - 1) % HorseRace.possibleColors) + 1,
		// characterProfileData.variant = Math.floor(Math.random() * HorseRace.avatarVariants) + 1

		let character = new HRCharacterModel(characterProfileData);

		this.characters[key] = character;
	}
}


// 	/*******************************/
// 	/*   HorseRace or HRModel?     */
// 	/*******************************/
// 	this.introQs = props.introQuestions;

// 	// initialize the attributes we want each character to have
// 	this.introQs.forEach(function(attribute, i, arr) {
// 		if(attribute.key) { HorseRace.Character.registerAttribute(attribute.key, attribute); }
// 	});


// 	/*******************************/
// 	/*      CURRENT PROGRESS       */
// 	/*******************************/
// 	this.currentQuestion = -1;
// 	this.currentIntro = -1;
// 	this.currentPhase = this.introQs.length > 0 ? 'intro' : 'quiz';


// 	/* START US OFF */
// 	if(this.resultsId) {
// 		this.showSharePage(this.resultsId);
// 	} else if(props.introScreen) {
// 		this.questionWrapper.append(props.introScreen);
// 		HorseRace.startAnimation(this.questionWrapper);		
// 	} else {
// 		this.startQuiz();
// 	}

// };


// HorseRace.prototype.randomAttributeValue = function(attr) {
// 	var attribute = HorseRace.Util.findObjectInArray(this.introQs, 'key', attr);

// 	var choicesN = attribute.choices.length;

// 	return attribute.choices[Math.floor(Math.random() * choicesN)].normalizedAnswer;
// }

// HorseRace.prototype.startQuiz = function() {

// 	this.bottomContent.append(this.scale.domScale);

// 	this.setWrapperClass('intro-step');

// 	var thisRace = this;

// 	$(this.bottomContent).bind('transitionend', function(evt) {
// 		if(evt.eventPhase == 2
// 			&& evt.originalEvent.propertyName == 'opacity') { 	// janky, but this fires on
// 																// both flex-grow (and prefix'd)
// 																// and opacity, and we just want one
// 			thisRace.startNextQuizStep();
// 		}
// 	});
	
// 	$(this.bottomContent).addClass('on');

// 	HorseRace.startAnimation(this.questionWrapper);
// }

// HorseRace.prototype.startQuizFromResults = function() {
// 	this.startQuiz();
// }

// HorseRace.prototype.startNextQuizStep = function() {

// 	var Qs, currentStep, finishFn;

// 	if(this.currentPhase == 'intro') {
// 		Qs = this.introQs;
// 		currentStep = this.currentIntro;
// 		finishFn = this.finishIntroStep;
// 	}

// 	if(this.currentPhase == 'quiz') {
// 		Qs = this.quizQs;
// 		currentStep = this.currentQuestion;
// 		finishFn = this.finishQuizStep;
// 	}

// 	if(Qs.length - 1 > currentStep) {
// 		// if we've still got steps yet, wire up the next step

// 		var step = Qs[++currentStep];

// 		// write the values back out after incrementing
// 		if(this.currentPhase == 'intro') { this.currentIntro = currentStep; }
// 		if(this.currentPhase == 'quiz') { this.currentQuestion = currentStep; }

// 		if(step.q) {
// 			// if this step has a question
// 			this.switchQuestion(step, finishFn);
		
// 			HorseRace.startAnimation(this.questionWrapper, null);
// 		} else {
// 			finishFn.call(this);
// 		}	

// 	} else {
// 		// if no questions left...

// 		if(this.currentPhase == 'intro') {

// 			for(character in this.scale.characters) {
// 				if(!this.scale.characters[character].isYou) {
// 					var theRace = this;
// 					this.fetchResultsByProfile(this.scale.characters[character].attributes, function(returnedData) {
// 						theRace.scale.characters[character].recordObjectOfAnswers(returnedData);
// 					});
// 				}
// 			}

// 			// figure out how to get bio stuff to hide again
// 			HorseRace.startAnimation($(".indicator-bio"));
			
// 			this.currentPhase = 'quiz';
// 			this.startNextQuizStep();
		
// 		} else if(this.currentPhase == 'quiz') {
// 			// show results screen
// 		}
// 	}
// }

// HorseRace.prototype.finishIntroStep = function() {

// 	var thisRace = this;

// 	var step = this.introQs[this.currentIntro];

// 	if(step.updateCharacters) { step.updateCharacters.call(this); }

// 	if(step.infoBarMain || step.infoBarSub) {
// 		this.populateInfoBar(step.infoBarMain, step.infoBarSub);
// 	}

// 	HorseRace.startAnimation(this.infoBar, function(evt) {

// 		for(var i = 0; i < step.indicators.length; i++) {
			
// 			if(thisRace.scale.characters[step.indicators[i]]) {
				
// 				var indicator = thisRace.scale.characters[step.indicators[i]].domIndicator;
// 				var mobileIndicator = thisRace.scale.characters[step.indicators[i]].mobileDomIndicator;

// 				HorseRace.startTransition(indicator, function(evt) {
// 					HorseRace.startAnimation($(".indicator-bio", evt.target), null);
// 				});

// 				HorseRace.startTransition(mobileIndicator, function(evt) {});
// 			}
// 		}

// 		// this is a transition not an animation just for easy's sake
// 		for(var i = 0; i < step.bioClasses.length; i++) {
// 			$('.indicator-bio .'+step.bioClasses[i]).addClass('on');
// 		}

// 		HorseRace.startAnimation(thisRace.infoBar, function() {
// 			if(thisRace.questionWrapper.hasClass('on')) {
				
// 				HorseRace.startAnimation(thisRace.questionWrapper, function() {
// 					thisRace.startNextQuizStep();
// 				});				
// 			} else {
// 				thisRace.startNextQuizStep();
// 			}

// 		});
// 	});
// }

// HorseRace.prototype.finishQuizStep = function() {

// 	var thisRace = this;

// 	var step = this.quizQs[this.currentQuestion];

// 	var myAnswer = this.scale.characters.you.getAnswer(step.key);
// 	var resultObj = HorseRace.Util.findObjectInArray(step.choices, "normalizedAnswer", myAnswer);

// 	var nextStepCallback = function() {
// 		if(thisRace.questionWrapper.hasClass('on')) {
			
// 			HorseRace.startAnimation(thisRace.questionWrapper, function() {
// 				thisRace.startNextQuizStep();
// 			});				
// 		} else {
// 			thisRace.startNextQuizStep();
// 		}

// 	};

// 	if(resultObj.infoText) {
// 		this.populateInfoBar(resultObj.infoText, '');

// 		HorseRace.startAnimation(this.infoBar, function(evt) {

// 			HorseRace.startAnimation(thisRace.infoBar, nextStepCallback);
// 		});
// 	} else {
// 		nextStepCallback();
// 	}

// }



// HorseRace.prototype.showSharePage = function(id) {
// 	var thisRace = this;

// 	var callback = function(returnedData) {

// 		returnedData.attributes.isShared = true;
// 		returnedData.attributes.name = "Your Friend";

// 		thisRace.scale.addCharacter("sharedResults", returnedData.attributes);

// 		thisRace.scale.characters['sharedResults'].questions = returnedData.questions;
// 		thisRace.scale.characters['sharedResults'].totals = returnedData.totals;
	
// 		thisRace.addResultsColumn(thisRace.scale.characters['sharedResults']);
// 		thisRace.addSharePageCTAColumn();

// 		thisRace.wrapper.addClass('results-display shared-results');
// 		HorseRace.startTransition('.bottom-content', null);
// 	};

// 	this.fetchResultsById(id, callback);
// }

// HorseRace.prototype.getAttributePrettyName = function(attribute, value) {
// 	var attributeObject = HorseRace.Util.findObjectInArray(this.introQs, 'key', attribute);
// 	var answerObj = HorseRace.Util.findObjectInArray(attributeObject.choices,'normalizedAnswer', value);
// 	var prettyAnswer = answerObj.verboseAnswer ? answerObj.verboseAnswer : answerObj.text;

// 	return prettyAnswer;
// }

// HorseRace.prototype.getAnswerPrettyName = function(question, value) {
// 	var qObject = HorseRace.Util.findObjectInArray(this.quizQs, 'key', question);
// 	var answerObj = HorseRace.Util.findObjectInArray(qObject.choices,'normalizedAnswer', value);
// 	var prettyAnswer = answerObj.verboseAnswer ? answerObj.verboseAnswer : answerObj.text;

// 	return prettyAnswer;
// }

// HorseRace.prototype.getUUID = function() {
// 	var thisRace = this;
// 	$.getJSON(this.db.server+"/_uuids","",function(returnedData) {
// 		var returnedUUID = returnedData['uuids'][0];
// 		thisRace.UUID = returnedUUID;
// 	});
// }

// HorseRace.appendToStylesheet = function(stylesheet, rule) {
// 	var nextIndex = stylesheet.cssRules.length;
// 	stylesheet.insertRule(rule, nextIndex);
// }

// HorseRace.possibleColors = 4;
// HorseRace.avatarVariants = 3;
// HorseRace.animationEndName = "webkitAnimationEnd animationend";
// HorseRace.transitionEndName = "webkitTransitionEnd transitionend";
// HorseRace.wrapperClasses = "horserace horserace-wrapper";