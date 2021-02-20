var secret = prompt("Please enter the secret word", "Enter word");

for(var i=0; i < 10; i++)
{
	var guess = prompt("Enter guess", "Guess");
	if(guess == snowball)
	{
		alert("Yes this is the correct word");
		break;
	}
}
