var encryptCaesarShift = function(str, key) {

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i++) {
		var c = str[i];

		// Get its code
		var code = str.charCodeAt(i);

		code = code + key;
		c = String.fromCharCode(code);
		output += c;
	}
	// All done!
	return output;
}
var decryptCaesarShift = function(str, key) {

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i++) {
		var c = str[i];

		// Get its code
		var code = str.charCodeAt(i);

		code = code - key;
		c = String.fromCharCode(code);
		output += c;
	}
	// All done!
	return output;
}
var result = encryptCaesarShift("hfgdhjjj", 2);
	console.log(result)
var result2 = decryptCaesarShift(result, 2);
	console.log(result2)