var encryptVizenerShift = function(str, key) {

	// Make an output variable
	var output = '';
	
	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		var keyIndex = (i+1) % key.length;
		// Get the character we'll be appending
		var c = str[i];

			var code = str.charCodeAt(i);
			code = code + key.charCodeAt(keyIndex);
			c = String.fromCharCode(code);

		// Append
		output += c;
	}
	// All done!
	return output;
}
var decryptVizenerShift = function(str, key) {

	// Make an output variable
	var output = '';
	
	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		var keyIndex = (i+1) % key.length;
		// Get the character we'll be appending
		var c = str[i];

			// Get its code
			var code = str.charCodeAt(i);
			code = code - key.charCodeAt(keyIndex);
			c = String.fromCharCode(code);

		// Append
		output += c;
	}
	// All done!
	return output;
}
var result = encryptVizenerShift("hfgdhjjj", "abc");
	console.log(result)
	
var result2 = decryptVizenerShift(result, "abc");
	console.log(result2)	