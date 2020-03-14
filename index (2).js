function askWeather() {
var request = new XMLHttpRequest();
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();
}

function askWeather() {
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("weather-result").innerHTML = response.current_condition.condition;
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
}

function askWeather() {
var request = new XMLHttpRequest();
document.getElementById('ask-weather');    // On récupère l'élément sur lequel on veut détecter le clic
ask-weather.addEventListener('click', function() {          // On écoute l'événement click
ask-weather.innerHTML = "météo sur paris!";               // On change le contenu de notre élément pour afficher "météo sur paris !"
}
});
