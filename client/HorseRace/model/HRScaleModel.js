class HRScaleModel {

	constructor(props) {

		this.baselineScore = props.baselineScore;
		this.totalRange = props.totalRange;

		this.characters = {};

		this.stepPercentage = 0;
	}

		/*********************************************************/
		/* 			not even sure we need this file 			 */
		/*********************************************************/

	addCharacter(name, characterProfileData) {
		characterProfileData.baselineScore = this.baselineScore;
		characterProfileData.stepPercentage = this.stepPercentage;

		var charsSize = Object.keys(this.characters).length;

		characterProfileData.color = ((charsSize - 1) % HorseRace.possibleColors) + 1,
		characterProfileData.variant = Math.floor(Math.random() * HorseRace.avatarVariants) + 1

		var character = new HorseRace.Character(characterProfileData);

		this.characters[name] = character;
		this.indicators.append(character.domIndicator);
		this.mobileIndicators.append(character.mobileDomIndicator);
		character.redrawIndicator();
	}

}

export default HRScaleModel;