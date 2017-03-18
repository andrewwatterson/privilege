import 'isomorphic-fetch';

export default class HRDatabase {
	constructor(props) {
		this.serverUrl = props.server;
		this.dbName = props.dbName;
		this.designDoc = props.designDoc;

		this.uuid = '';
		this.newUuid();
		//this.relatedUUID = '';
	}

	newUuid() {

		fetch(this.serverUrl+"/_uuids").then((response) => {
			var jsonResponse = response.json().then((json) => {

					let returnedUUID = json.uuids[0];

					this.uuid = returnedUUID;
					// thisRace.UUID = returnedUUID;

					// 		var cookieName = 'HorseRace-'+this.db.dbName;

					// if(previousUUID = HorseRace.Util.getCookie(cookieName)) {
					// 	this.relatedUUID = previousUUID;

					// } else {
					// 	this.relatedUUID = this.UUID;
					// 	HorseRace.Util.createCookie(cookieName, this.UUID, 90);
					// }
				});

		}, (error) => {
			// handle network error
		});
	}

	availableProfiles() {
		// var attributeKeys = [];

		// for(var i = 0; i < this.introQs.length; i++) {
		// 	if(this.introQs[i].key) { attributeKeys.push(this.introQs[i].key); }	
		// }

		// var thisRace = this;

		// $.ajax(
		// {
		// 	"type": "GET",
		// 	"url": this.db.server+"/"+this.db.dbName+"/_design/"+this.db.designDoc+"/_view/profiles",
		// 	"data": {
		// 		key: JSON.stringify(JSON.stringify(attributeKeys))
		// 	},
		// 	"contentType": "application/json",
		// 	"success":
		// 		function(returnedData) {

		// 			var profiles = Object.keys(returnedData.rows[0].value).map(function(val) { return JSON.parse(val); });

		// 			console.log(profiles);

		// 			for(var i = 0; i < profiles.length; i++) {
		// 				var qList = profiles[i].questions;
		// 			} 
	 
		// 			// build a tree in the order of the interview questions
		// 			thisRace.buildTreeFromProfiles(profiles, thisRace.availableProfiles);
		// 		},
		// 	"dataType": "json"
		// });
	}

	resultsByProfile(profileData) {
		// var questionKeys = [];

		// for(var i = 0; i < this.quizQs.length; i++) {
		// 	if(this.quizQs[i].key) { questionKeys.push(this.quizQs[i].key); }	
		// }

		// questionKeys = questionKeys.sort();

		// var profileQuery = {};

		// Object.assign(profileQuery, attributes);

		//profileQuery.questions = questionKeys;

		console.log(profileQuery);

		$.ajax(
		{
			"type": "GET",
			"url": this.db.server+"/"+this.db.dbName+"/_design/"+this.db.designDoc+"/_view/results",
			"data": {
				key: JSON.stringify(JSON.stringify(attributes))
			},
			"contentType": "application/json",
			"success": function(returnedData) {
				if(returnedData.rows.length > 0) { callback(returnedData.rows[0].value); }
			},
			"dataType": "json"
		});

		// var resultsForCharacter = {};
		// resultsForCharacter['questions'] = {};
		// resultsForCharacter['totals'] = {};

		// resultsForCharacter['totals']['totalPrivilege'] = 0;

		// var privilegeTarget = Math.floor(Math.random() * 35);

		// for(var i = 0; i <= 35; i++) {
		// 	var result = 0;
		// 	Math.random() < (privilegeTarget / 35) ? result = 1 : result = 0;
		// 	resultsForCharacter['questions']['q'+i] = result;
		// 	resultsForCharacter['totals']['totalPrivilege'] += result;
		// }

		// function callback(data) {
		// 	//console.log(data);
		// };

		// callback(resultsForCharacter);
	}

	resultsByUuid(id, callback) {

		$.getJSON(this.db.server+"/"+this.db.dbName+"/"+id,"",callback);
	}


	// POPULATE CHARACTER OBJECT WITH RETURNED DATA

	// function(returnedData) {
	// 				var questionAvgs = returnedData.rows[0].value[JSON.stringify(character.attributes)];

	// 				for(qAvg in questionAvgs) {
	// 					var finalAvg = Math.round(questionAvgs[qAvg].total / questionAvgs[qAvg].n);
	// 					character.questions[qAvg] = finalAvg;
	// 					character.totals.totalPrivilege += finalAvg;
	// 				}

	// 				console.log(character.questions);
	// 			}
}