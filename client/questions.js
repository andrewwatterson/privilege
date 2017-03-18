module.exports = {

	interviewQuestions: [
		{
			q: "What is your gender?",
			choices: {
				male: "Male",
				female: "Female",
				other: "Other"
			},
			key: "gender"
		}
	],
	quizQuestions: [
		{
			"q": "Did you parents work nights and weekends to support your family?",
			"choices": [
				{
					key: 0,
					text: "Yes",
					scaleEffect: -1
				},
				{
					key: 1,
					text: "No",
					scaleEffect: 0,
					infoText: "Many poor families can't eat dinner together because of the realities of working multiple jobs."
				}
			],
			key: "q1"
		},
		{
			"q": "Are you able to move through the world without fear of sexual assault?",
			"choices": [
				{
					key: 0,
					text: "Yes",
					scaleEffect: 1,
					infoText: "Many women are afraid to walk home alone at night because of the threat of sexual violence."
				},
				{
					key: 1,
					text: "No",
					scaleEffect: 0
				}
			],
			key: "q2"
		}
	]
};

// interviewQuestions: [
// 	{
// 		'infoBarMain': 'We&rsquo;ll start you off with a medium amount of privilege.',
// 		'infoBarSub': '',
// 		'updateCharacters': function() {
// 			this.scale.addCharacter('you', { isYou: true });
// 		},
// 		'indicators': ['you'],
// 		'bioClasses': []
// 	},
// 	{
// 		"q":
// 			"What is your gender?",
// 		"choices":
// 			[
// 				{
// 					text: "Male",
// 					normalizedAnswer: 'male'
// 				},
// 				{
// 					text: "Female",
// 					normalizedAnswer: 'female'
// 				},
// 				{
// 					text: "Other",
// 					normalizedAnswer: 'other'
// 				}
// 			],
// 		"key":"gender",
// 		"customSetter": function() {
// 			var nameArray = this.gender == 'male' ? 'MALE_NAMES' : 'FEMALE_NAMES';
			
// 			if(!this.isYou && !this.isShared) {
// 				this.name = HorseRace.Character[nameArray][Math.floor(Math.random() * nameArray.length)];
// 				this.nameDiv.empty().append(this.name);
// 			}
// 		},
// 		'infoBarMain': 'Alright. To give you the full range of experience, we\'ll compare your answers with a man and a woman.',
// 		'infoBarSub': '',
// 		'updateCharacters': function() {

// 			var ideals = [
// 				{'name': 'malewhite', 'attributes': {'gender': 'male', 'race': 'white'}},
// 				{'name': 'femalewhite', 'attributes': {'gender': 'female', 'race': 'white'}},
// 				{'name': 'malenonwhite', 'attributes': {'gender': 'male', 'race': 'nonwhite'}},
// 				{'name': 'femalenonwhite', 'attributes': {'gender': 'female', 'race': 'nonwhite'}}
// 			]

// 			for(var i = 0; i < ideals.length; i++) {
// 				if(this.reserveProfile(ideals[i].name, ideals[i].attributes)) {
// 					this.scale.addCharacter(ideals[i].name, ideals[i].attributes);
// 				}
// 			}
// 		},
// 		'indicators': ['malewhite','femalewhite'],
// 		'bioClasses': []
// 	},
// 	{
// 		"q":
// 			"Are you white?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					verboseAnswer: 'White',
// 					normalizedAnswer: 'white'
// 				},
// 				{
// 					text: "No",
// 					verboseAnswer: 'Non-white',
// 					normalizedAnswer: 'nonwhite'
// 				}
// 			],
// 		"key":"race",
// 		//'stepName': 'all-introed',
// 		'infoBarMain': 'Great. Since everyone has a different experience, we want to see people of all races.',
// 		'infoBarSub': '',
// 		'indicators': ['malenonwhite','femalenonwhite'],
// 		'bioClasses': ['race']
// 	},
// 	{
// 		"q":
// 			"Are you straight?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					verboseAnswer: 'Straight',
// 					normalizedAnswer: 'straight'
// 				},
// 				{
// 					text: "No",
// 					verboseAnswer: 'Gay',
// 					normalizedAnswer: 'gay'
// 				}
// 			],
// 		"key":"orientation",
// 		//'stepName': 'after-orientation',
// 		'infoBarMain': 'Some of the characters we\'ve introduced are straight, and some are gay.',
// 		'infoBarSub': 'Mouse over their faces during the quiz to see more about them.',
// 		'updateCharacters': function() {
// 			var same = this.scale.characters['you'].orientation;
// 			var opposite = this.scale.characters['you'].orientation == 'straight' ? 'gay' : 'straight';

// 			var idealOrientations = [
// 				{'name': 'malewhite', 'attributes': {'orientation': opposite}},
// 				{'name': 'femalewhite', 'attributes': {'orientation': 'straight'}},
// 				{'name': 'malenonwhite', 'attributes': {'orientation': same}},
// 				{'name': 'femalenonwhite', 'attributes': {'orientation': 'gay'}}
// 			];

// 			for(var i = 0; i < idealOrientations.length; i++) {
// 				this.pickAvailableAttributeFromIdeal(idealOrientations[i].name, 'orientation', idealOrientations[i].attributes.orientation);
// 			}
// 		},
// 		'indicators': [],
// 		'bioClasses': ['orientation'],
// 	},
// 	{
// 		"q":
// 			"When I was growing up, my family was...",
// 		"choices":
// 			[
// 				{
// 					text: "Lower Class",
// 					normalizedAnswer: 'lowerclass'
// 				},
// 				{
// 					text: "Middle Class",
// 					normalizedAnswer: 'middleclass'
// 				},
// 				{
// 					text: "Upper Class",
// 					normalizedAnswer: 'upperclass'
// 				}
// 			],
// 		"key":"income",
// 		//'stepName': 'after-income',
// 		'infoBarMain': 'Thanks for introducing yourself. Let\'s get to the questions.',
// 		'infoBarSub': '',
// 		'updateCharacters': function() {
// 			var same = this.scale.characters['you'].income;

// 			var idealIncomes = [
// 				{'name': 'malewhite', 'attributes': {'income': this.randomAttributeValue('income')}},
// 				{'name': 'femalewhite', 'attributes': {'income': same}},
// 				{'name': 'malenonwhite', 'attributes': {'income': this.randomAttributeValue('income')}},
// 				{'name': 'femalenonwhite', 'attributes': {'income': this.randomAttributeValue('income')}}
// 			];

// 			for(var i = 0; i < idealIncomes.length; i++) {
// 				this.pickAvailableAttributeFromIdeal(idealIncomes[i].name, 'income', idealIncomes[i].attributes.income);
// 			}
// 		},
// 		'indicators': [],
// 		'bioClasses': ['income'],
// 	}
// ]

// privilegeQuestions: [
// 	{
// 		"q":
// 			"Did you parents work nights and weekends to support your family?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: "Many poor families can't eat dinner together because of the realities of working multiple jobs."
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q1"
// 	},
// 	{
// 		"q":
// 			"Are you able to move through the world without fear of sexual assault?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: "Many women are afraid to walk home alone at night because of the threat of sexual violence."
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q2"
// 	},
// 	{
// 		"q":
// 			"Can you show affection for your romantic partner in public without fear of ridicule or violence?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: "Even with the recent victories for gay marriage, social acceptance for homosexuality still has a long way to go."
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q3"
// 	},
// 	{
// 		"q":
// 			"Have you ever been diagnosed with a physical or mental illness/disability?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: "Many disabilities affect the lives of those around you very deeply, even though you may not be able to spot them."
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q4"
// 	},
// 	{
// 		"q":
// 			"Was English the primary language spoken in your house growing up?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: "Immigrants or their children may have a hard time getting jobs or interacting with others due to a language barrier."
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q5"
// 	},
// 	{
// 		"q":
// 			"Did you grow up in a supportive family environment?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: "Even without explicit physical or emotional abuse, a lack of support at home can affect people's moods and ultimately productivity throughout the day."
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q6"
// 	},
// 	{
// 		"q":
// 			"Have you ever tried to change your speech or mannerisms to gain credibility?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: "Women and minorities often feel as though they have to speak or act differently in order to gain the respect automatically afforded to the rest of us."
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q7"
// 	},
// 	{
// 		"q":
// 			"Can you find the hair products you need and/or cosmetics that match your skin color anywhere in the country?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: "Common products like make-up and even bandages are most often made to match a very narrow range of skin tones."
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q8"
// 	},
// 	{
// 		"q":
// 			"Were you embarrassed about your clothes or house growing up?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: "Common products like make-up and even bandages are most often made to match a very narrow range of skin tones."
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q9"
// 	},
// 	{
// 		"q":
// 			"Are you able to make mistakes without people attributing them to shortcomings of your racial/gender group?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q10"
// 	},
// 	{
// 		"q":
// 			"Can you legally marry the person you love, regardless of where you live?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q11"
// 	},
// 	{
// 		"q":
// 			"Were you born in the United States?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q12"
// 	},
// 	{
// 		"q":
// 			"Have you or your parents ever gone through a divorce?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q13"
// 	},
// 	{
// 		"q":
// 			"Did you feel like you had adequate access to healthy food growing up?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q14"
// 	},
// 	{
// 		"q":
// 			"Are you reasonably sure you would get hired for a job based on your ability and qualifications?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q15"
// 	},
// 	{
// 		"q":
// 			"Would you ever think twice about calling the police when trouble occurs?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q16"
// 	},
// 	{
// 		"q":
// 			"Can you see a doctor whenever you feel the need?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q17"
// 	},
// 	{
// 		"q":
// 			"Do you feel comfortable being emotionally expressive/open?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q18"
// 	},
// 	{
// 		"q":
// 			"Have you ever been the only person of your gender, race, socio-economic status, or sexual orientation in a classroom or at work?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q19"
// 	},
// 	{
// 		"q":
// 			"Did you take out loans for your education?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q20"
// 	},
// 	{
// 		"q":
// 			"Do you get time off for the (religious) holidays you celebrate?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q21"
// 	},
// 	{
// 		"q":
// 			"Did you have a job during your high school and college years?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q22"
// 	},
// 	{
// 		"q":
// 			"Do you feel comfortable walking home alone at night?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q23"
// 	},
// 	{
// 		"q":
// 			"Have you ever travelled outside the United States?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q24"
// 	},
// 	{
// 		"q":
// 			"Have you ever felt there was NOT adequate or accurate representation of your race, sexual orientation, gender, and/or disability in the media?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q25"
// 	},
// 	{
// 		"q":
// 			"Would your parents be able to financially help/support you if you were going through a financial hardship?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q26"
// 	},
// 	{
// 		"q":
// 			"Have you ever been bullied or made fun of for something you can't change?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q27"
// 	},
// 	{
// 		"q":
// 			"Were there more than 50 books in your house growing up?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q28"
// 	},
// 	{
// 		"q":
// 			"Did you learn about the culture or history of your ancestors in elementary school?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q29"
// 	},
// 	{
// 		"q":
// 			"Did you parents attend college?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q30"
// 	},
// 	{
// 		"q":
// 			"Did you ever go on a family vacation?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q31"
// 	},
// 	{
// 		"q":
// 			"Can you buy new clothes or go out to dinner when you want to?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q32"
// 	},
// 	{
// 		"q":
// 			"Have you ever been offered a job because of your association with a friend or family member?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 1,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": true,
// 		"key":"q33"
// 	},
// 	{
// 		"q":
// 			"Were either of your parents ever laid off or unemployed not by choice?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q34"
// 	},
// 	{
// 		"q":
// 			"Have you ever been uncomfortable with a joke or statement you overheard related to your race, ethnicity, gender, appearance, or sexual orientation AND felt unsafe confronting the situation?",
// 		"choices":
// 			[
// 				{
// 					text: "Yes",
// 					normalizedAnswer: 1,
// 					scaleEffect: 0,
// 					infoText: ""
// 				}, 
// 			 	{
// 					text: "No",
// 					normalizedAnswer: 0,
// 					scaleEffect: -1,
// 					infoText: ""
// 				}
// 			],
// 		"isPrivilege": false,
// 		"key":"q35"
// 	}
// ]