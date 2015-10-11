module.exports = function generateFrequency(word) {
	var hash = {};
	var freqString = '';
	var startAscii = 'a'.charCodeAt();
	var letter;
	var charArr = word.toString().toLowerCase().split('').sort();

	//use a hash table to capture the frequency of each letter appears in the word
	for(var i = 0; i < charArr.length; i++) {
		hash[charArr[i]] = hash[charArr[i]] ? hash[charArr[i]] + 1 : 1;
	};

	//because JS hash table(object) doesn't garantee order, this is to make sure the letter appears in the final frquency string is ordered
	for(var i = startAscii; i < startAscii + 26; i++ ) {
		letter = String.fromCharCode(i);
		if(hash.hasOwnProperty(letter)) {
			freqString += letter + hash[letter].toString();
		}
	}	
	//for 'loop', the freqString = 'l1o2p1'
	return freqString;
};
