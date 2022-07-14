const day = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

read = (file) => {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", file, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

isEmpty = (obj) => {
	for(let prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
}

tagToText = (tag, text, replace) => {
	return text.replace(tag, replace);
}

getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
}

httpGet = (theUrl) =>  {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	return JSON.parse(xmlHttp.responseText);
}

sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}