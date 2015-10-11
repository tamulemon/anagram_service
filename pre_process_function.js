var fs = require('fs');
var http = require('http');
var util = require('util');
var generateFrequency = require('./get_frequency_function.js');

http.get('http://www-01.sil.org/linguistics/wordlists/english/wordlist/wordsEn.txt', function(res) {
	var data;
	
	res.on('data', function(chunk) {
		data += chunk;
	});
	
	res.on('end', function() {
		var dataArr = data.split('\r\n');
		var len = dataArr.length;
		var curr, processedWord = {}, hashKey;
		for(var i = 0; i < len; i++) {
			curr = dataArr[i];
			hashKey = generateFrequency(curr);
			if(processedWord.hasOwnProperty(hashKey)) {
				processedWord[hashKey].push(curr);
			} else {
				processedWord[hashKey] = [curr];
			}
		}
		if(i === len) {
			console.log('process words done');
			fs.writeFileSync('./processed_output.json', JSON.stringify(processedWord));
		}
	});
		
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});

