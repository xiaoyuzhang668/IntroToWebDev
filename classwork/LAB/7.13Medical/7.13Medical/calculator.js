// Description:
// This model utilizes both an Impact and Exploitability sub score to calculate a score for a medical device vulnerability.
// The Impact sub score involves summing the values given from the combinations of Impact variables (each combo has a different value).
// The Exploitability sub score involves multiplying the Exploitability variables.
// The final vulnerability score (the base score) is calculated by multiplying the Impact and Exploitability sub score by constants - an Impact
// weighting (wI) and an Exploitability weighting (wE) respectively.

// Equations:
//
//		ISC_base = conf_sens + integ_health + avail_health
//		ESC = AV * AC * PR * UI
//
//		wI = 3.326258289 and wE = 1.1
//		Base Score = wI * ISC_base + wE * ESC

function computeScore() {
	var ISCBase26 = impactBaseScore26(conf, integ, avail, health, sens);
	var ESC = exploitabilityScore(AV, AC, PR, UI);
	var score = baseScore(ISCBase26, ESC, scope);
	return score;
}

// Round to the nearest decimal position
function ceilToDecimal(value, decimal) {
	return Math.ceil(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

// Model 2.6 -- Hard-coded values for the Impact variable combinations
// ISC_base = conf_sens + integ_health + avail_health

function impactBaseScore26(conf, integ, avail, health, sens) {
	var ISCbase26 = 0;
	var conf_sens = 0;
	var avail_health = 0;
	var integ_health = 0;
	var none = 0;
	var low = 0.22;
	var high = 0.56;

	// Sensitivity vs. Confidentiality (None, Low, High)
	// 0  	 0.22		0.56
	// 0	 0.65	 	0.75
	// 0	 0.85		0.95

	//Array used to store the values of each one of the possible combinations.
	var Sens_Conf = {
		SN_CL: 0.22, SN_CH: 0.56,
		SL_CL: 0.65, SL_CH: 0.75,
		SH_CL: 0.85, SH_CH: 0.95,
		Conf_None: 0.0
	};

	if (conf == none) {
		conf_sens = Sens_Conf['Conf_None'];
	}

	// Confidentiality is LOW
	if (conf == low) {
		if (sens == none) {
			conf_sens = Sens_Conf['SN_CL'];
		}

		if (sens == low) {
			conf_sens = Sens_Conf['SL_CL'];
		}

		if (sens == high) {
			conf_sens = Sens_Conf['SH_CL'];

		}
	}

	// Confidentiality is HIGH
	if (conf == high) {
		if (sens == none) {
			conf_sens = Sens_Conf['SN_CH'];
		}

		if (sens == low) {
			conf_sens = Sens_Conf['SL_CH'];
		}

		if (sens == high) {
			conf_sens = Sens_Conf['SH_CH'];
		}
	}

	// Health Impact vs. Integrity (None, Low, High)
	// 0		0.22	 0.56
	// 0.55		0.6	 	 0.75
	// 0.85		0.9 	 0.95

	//Array used to store the values of each one of the possible combinations.
	var Health_Integ = {
		HN_IN: 0.0, HN_IL: 0.22, HN_IH: 0.56,
		HL_IN: 0.55, HL_IL: 0.6, HL_IH: 0.75,
		HH_IN: 0.85, HH_IL: 0.9, HH_IH: 0.95
	};

	// Integriry is NONE
	if (integ == none) {
		if (health == none) {
			integ_health = Health_Integ['HN_IN'];
		}

		if (health == low) {
			integ_health = Health_Integ['HL_IN'];
		}

		if (health == high) {
			integ_health = Health_Integ['HH_IN'];
		}
	}

	// Integriry is LOW
	if (integ == low) {
		if (health == none) {
			integ_health = Health_Integ['HN_IL'];
		}

		if (health == low) {
			integ_health = Health_Integ['HL_IL'];
		}

		if (health == high) {
			integ_health = Health_Integ['HH_IL'];
		}
	}

	// Integriry is HIGH
	if (integ == high) {
		if (health == none) {
			integ_health = Health_Integ['HN_IH'];
		}

		if (health == low) {
			integ_health = Health_Integ['HL_IH'];
		}

		if (health == high) {
			integ_health = Health_Integ['HH_IH'];
		}
	}

	// Health Impact vs. Availability (None, Low, High)
	// 0		0.22	 0.56
	// 0.55		0.6		 0.65
	// 0.85		0.9 	 0.95

	//Array used to store the values of each one of the possible combinations.
	var Health_Avail = {
		HN_AN: 0.0, HN_AL: 0.22, HN_AH: 0.56,
		HL_AN: 0.55, HL_AL: 0.6, HL_AH: 0.65,
		HH_AN: 0.85, HH_AL: 0.9, HH_AH: 0.95
	};

	// Availability is NONE
	if (avail == none) {
		if (health == none) {
			avail_health = Health_Avail['HN_AN'];
		}

		if (health == low) {
			avail_health = Health_Avail['HL_AN'];
		}

		if (health == high) {
			avail_health = Health_Avail['HH_AN'];
		}
	}

	// Availability is LOW
	if (avail == low) {
		if (health == none) {
			avail_health = Health_Avail['HN_AL'];
		}

		if (health == low) {
			avail_health = Health_Avail['HL_AL'];
		}

		if (health == high) {
			avail_health = Health_Avail['HH_AL'];
		}
	}

	// Availability is HIGH
	if (avail == high) {
		if (health == none) {
			avail_health = Health_Avail['HN_AH'];
		}

		if (health == low) {
			avail_health = Health_Avail['HL_AH'];
		}

		if (health == high) {
			avail_health = Health_Avail['HH_AH'];
		}
	}

	// Compute the base score
	ISCbase26 = conf_sens + integ_health + avail_health;

	return ISCbase26;
}

// Exploitability Sub Score
// ESC = AV * AC * PR * UI

function exploitabilityScore(AV, AC, PR, UI) {
	var ESC = AV * AC * PR * UI;
	return ESC;
}

// Vulnerability Base Score

// Minimum score of 0, maximum score of 10
// Base score is rounded to the tenths decimal place and displayed with one decimal place
// If the scope is changed, multiply the score by 1.08

// Base Score = min(3.326258289 * ISC_base + 1.1 * ESC, 10)

function baseScore(ISCBase, ESC, scope) {
	var score = 0;

	if (ISCBase > 0) {
		if (scope === "same") {
			score = ceilToDecimal(Math.min((3.326258289 * ISCBase + 1.1 * ESC), 10), 1);
		}
		else {
			score = ceilToDecimal(Math.min(1.08 * (3.326258289 * ISCBase + 1.1 * ESC), 10), 1);
		}
	}

	return score;
}

//-------------------------------------------------------------------------------------------------------

// Below is the code that responds to user input by extracting variable values from selected radio buttons
var warningDiv = document.getElementById("warning");
var scoreDiv = document.getElementById("score");

// Model variables
var AV = 0;
var AC = 0;
var PR = 0;
var UI = 0;
var scope = 0;
var conf = 0;
var integ = 0;
var avail = 0;
var health = 0;
var sens = 0;
var finalScore = 0; // Holds value of final score

// Array to hold whether any of the buttons have been clicked
// Only compute the Vulnerability Base Score if all the categories have been inialized
var buttons = [false, false, false, false, false, false, false, false, false, false];

function updateScore(buttonClicked) {
	//Gets the element based on the id, and then assigns the name of the element to the variable buttonClicked.
	var element = document.getElementById(buttonClicked);

	//Array used to store the values of each one of the possible options.
	var Values = {
		AV_N: 0.85, AV_A: 0.62, AV_L: 0.55, AV_P: 0.2, AC_L: 0.77, AC_H: 0.44,
		PR_N: 0.85, PR_L: 0.62, PR_H: 0.27, UI_N: 0.85, UI_R: 0.62, scope_U: 'same', scope_C: 'changed',
		conf_N: 0.0, conf_L: 0.22, conf_H: 0.56, integ_N: 0.0, integ_L: 0.22, integ_H: 0.56, avail_N: 0.0,
		avail_L: 0.22, avail_H: 0.56, health_N: 0.0, health_L: 0.22, health_H: 0.56, sens_N: 0.0,
		sens_L: 0.22, sens_H: 0.56
	};


	if (element.name == "AV") {
		buttons[0] = true;
		AV = Values[element.id];
	}

	if (element.name == "AC") {
		buttons[1] = true;
		AC = Values[element.id];
	}

	if (element.name == "PR") {
		buttons[2] = true;
		PR = Values[element.id];
	}

	if (element.name == "UI") {
		buttons[3] = true;
		UI = Values[element.id];
	}

	if (element.name == "scope") {
		buttons[4] = true;
		scope = Values[element.id];
	}

	if (element.name == "conf") {
		buttons[5] = true;
		conf = Values[element.id];
	}

	if (element.name == "integ") {
		buttons[6] = true;
		integ = Values[element.id];
	}

	if (element.name == "avail") {
		buttons[7] = true;
		avail = Values[element.id];
	}

	if (element.name == "health") {
		buttons[8] = true;
		health = Values[element.id];
	}

	if (element.name == "sens") {
		buttons[9] = true;
		sens = Values[element.id];
	}

	// Check if all of the buttons have been clicked ("buttons" array contains only "true")
	for (var i = 0; i < buttons.length; i++) {
		// If any of the values is FALSE - return and do nothing
		if (buttons[i] === false) {
			return;
		}
	}

	// At this point in the code -- all the buttons have been clicked for each category (there is a value for each variable in the score calculation)
	// Stop displaying "warning" div
	warningDiv.style.display = "none";

	// Compute the vulnerability score
	finalScore = computeScore();

	// Display the score in the "score" div
	scoreDiv.innerHTML = finalScore.toFixed(1);
}


document.addEventListener('DOMContentLoaded', function() {
	//Searchs all elements of type input, and adds event listeners of type "click" to each one of those.
	var radios = document.getElementsByTagName('input');
	for (var i = 0; i < radios.length; i++) {
		//Stores the id of each radio button
		let forRadio = radios[i].id;
		//Stores the radio button itself.
		let thisRadio = document.getElementById(forRadio);
		thisRadio.addEventListener("click", function() {
			updateScore(forRadio);
		});
    }
}, false);
