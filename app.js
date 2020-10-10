var fs = require('fs');

var fetch = require('node-fetch');



async function getjokes(){
	let search = process.argv;
	var response = await fetch("https://api.chucknorris.io/jokes/random");
	var json = await response.json();
	if(json != null ){
		console.log(json.value);
		fs.appendFile('jokes.txt', json.value, function(err){
			if(err) throw err;
			console.log('Saved');
			fs.readFile('jokes.txt', function(err, data) {
    		console.log(data.toString());
  		});
	})

	}else{
		console.log("nothing here");
		return null
	}
	
}
getjokes();