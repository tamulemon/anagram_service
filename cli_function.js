var fs = require('fs');
var generateFrequency = require('./get_frequency_function.js');

function findAnagram(input){

	if (!input) {
		console.log('Please enter a valid word');
	} 
	else {	
//		var transformedInput = input.toString().toLowerCase;
		var hashTable = JSON.parse(fs.readFileSync('./processed_output.json'));
		var hashKey = generateFrequency(input);

		if(hashTable.hasOwnProperty(hashKey)) {
			var allWords = hashTable[hashKey];
			var output = [];
			var curr;
			for(var i = 0; i < allWords.length; i++) {
				curr = allWords[i];
				if(input === input.toUpperCase()) {
				}
				if(allWords[i] !== input) {
					output.push(allWords[i]);
				}
			}
		} 
		else {
			console.log('The word [' + input + '] is not in the word list.');
		}
	}
}

findAnagram(process.argv[2]);