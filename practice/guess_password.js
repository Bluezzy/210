var password = 'password';
var attempt = 1;


for (attempt = 1; attempt <= 3; attempt += 1) {
	var guess = prompt('What is the password:');
	if (guess === password) {
		alert('You have successfully logged in');
		break;
	}
	else if (attempt === 3) {
		alert('You have been denied access');
	}
}
