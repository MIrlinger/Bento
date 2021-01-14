// Get the hour
var aujourd_hui = new Date();
var hour = aujourd_hui.getHours();

// Here you can change your nom
var nom = 'Margot';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var gree2 = 'Good morning! ';
var gree3 = 'Good afternoon ';
var gree4 = 'Good evening ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

console.log(hour)

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + nom;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + nom;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + nom;
} else  {
    document.getElementById('greetings').innerText = gree4 + nom;
}
