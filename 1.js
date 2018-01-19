var caesarShift = function(str, key) {
    var str = "Hello world";
	var key = 1;
	
	// Wrap the amount
	if (key < 0)
		return caesarShift(str, key + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + key) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + key) % 26) + 97);
		}
		// Append
		output += c;
	}
	// All done!
	return output;
}
var result = caesarShift("Hello world", 1);
	console.log(result)