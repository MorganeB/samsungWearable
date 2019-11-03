window.onload = function() {
 // TODO:: Do your initialization job
 // Add eventListener for tizenhwkey
 document.addEventListener('tizenhwkey', function(e) {
 if (e.keyName === "back") {
	 try {
		 tizen.application.getCurrentApplication().exit();
	 } catch (ignore) {}
  }
 });
 
 // display current time
 var today = new Date();
 var time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() ;
 document.getElementById("time").innerHTML = time ;
 
 var url = 'http://travelplanner.mobiliteit.lu/restproxy/departureBoard?accessId=cdt&format=json&id=A=1@O=Kirchberg, Léon Thyes@X=6,165018@Y=49,637292@U=82@L=200417022@B=1@p=1559736444;'
 var obj ;
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     obj = JSON.parse(this.responseText);
 	var x = '' ; 
 	var i ;
 	for (i = 0; i < obj.Departure.length; i++) {
 		if (obj.Departure[i].direction == "Kockelscheuer, Patinoire") {
 			if (obj.Departure[i].hasOwnProperty('rtTime')){
 				x += "<span class=\"strikethrough\">" + obj.Departure[i].time.substring(0,5) + "</span>" + obj.Departure[i].rtTime.substring(0,5) + "<br>";
 			} else {
 				x += obj.Departure[i].time.substring(0,5) + "<br>";
 			}
 			document.getElementById("demo").innerHTML = x;
 		}
 	}
 	for (i = 0; i < obj.Departure.length; i++) {
 		if (obj.Departure[i].direction == "Kockelscheuer, Patinoire") {
 			if (obj.Departure[i].hasOwnProperty('rtTime')){
 				x += "<span class=\"strikethrough\">" + obj.Departure[i].time.substring(0,5) + "</span>" + obj.Departure[i].rtTime.substring(0,5) + "<br>";
 			} else {
 				x += obj.Departure[i].time.substring(0,5) + "<br>";
 			}
 			document.getElementById("demo").innerHTML = x;
 		}
 	}
   }
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 
};

document.addEventListener("rotarydetent", function(event){
	 if (event.detail.direction === "CW") { 
				window.scrollBy(0, 200);
			} else { 
				window.scrollBy(0, -200);
			}
	 }, false);