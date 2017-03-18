class HRCharacterModel {

	constructor(profileData) {

		//PROFILE DATA WILL NEED A COLOR FROM HorseRace.possibleColors
		//WHERE DO WE SET BASELINE SCORE (in the scale I guess)

		//ADD A DATABASE ID

		this.name = profileData.name;
		this.color = '';
		this.variant = '';

		this.attributes = {};
		this.questions = {};
		this.totals = {};

		this.totals.baselineScore = profileData.baselineScore;
		this.totals.currentScore = profileData.baselineScore;

		// this.isYou = profileData.isYou;
		// this.isShared = profileData.isShared;
		
		//this.updateAttributes(profileData);
	}

	static MALE_NAMES = ["Alan","Jason","Simon","Thomas","Brian","Brandon","Owen","Paul","Boris","Michael","William","Richard","Cameron","Austin","Nathan","Paul","Eric","Sam","Adam","Warren"];
	static FEMALE_NAMES = ["Andrea","Caroline","Pippa","Lillian","Audrey","Caroline","Mary","Megan","Fiona","Abigail","Joanne","Carol","Jessica","Bernadette","Theresa","Dorothy","Alison","Lisa","Jennifer","Sophie"];

	// updateAttributes(profileData) {

	// 	for(let attribute in profileData) {
	// 		// update the object
	// 		this[attribute] = profileData[attribute];
	// 	}
	// }

	// getDatabaseObject() {
	// 	return {
	// 		'attributes': this.attributes,
	// 		'questions': this.questions,
	// 		'totals': this.totals
	// 	};
	// }

	getAnswer(key) {

		return this.questions[key];
	}

	recordAnswer(key, value) {

		// if it's an attribute
		if(Object.getPrototypeOf(this).propertyIsEnumerable(key)) {
			this[key] = value;
		} else {
			this.questions[key] = value;
		}

	}

	recordObjectOfAnswers(answersObj) {
		// the answers are nested inside an object that has the profile as the key
		for(profile in answersObj) {
			var answers = answersObj[profile];

			for(a in answers) {
				this.recordAnswer(a, Math.round(answers[a].total / answers[a].n));
			}
		}
	}
}

export default HRCharacterModel;