/*Part 1
Create a Node.js application that does the following:
- Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
- Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.json
- Outputs information about that specific country. Must be in the following format:
Country: <country name>
Top Level Domain: <tld>*/


/* maak read function, laat readFile de function lezen*/

var fs = require('fs')

/*function countryRoads(Country){
fs.readFile("countries.json", function(err,data){
	if (err){
		throw err
	}

	 text = JSON.parse(data)

	for (var i = 0; i < text.length; i++) {
		if(Country==text[i].name){
	console.log(text[i].name)
	console.log(text[i].topLevelDomain)
		}
	}

});}

countryRoads(process.argv[2])

*/

/*

Part 2
- For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
- This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
- One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
- Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.
- The output of the application should have the following format: 
Country: <country name>
Top Level Domain: <tld>

*/

module.exports = {
lezer: function (Filename, callback){
fs.readFile(Filename, function(err,data){
	if (err){
		throw err
	}

	var text = JSON.parse(data)
	callback(text)
})}
}


