var talk = [];
var likes = 0;
function displayUserComment() {
	
	var userTalk = document.getElementById("username").value;
	var commentTalk = document.getElementById("comment").value;
	var userInput = {username: userTalk, comment: commentTalk, postdate: Date.now()};
	talk.push(userInput);
	
	document.getElementById("username").value= "";
	document.getElementById("comment").value= "";
	
	displayAllComments();
   
}

function displayAllComments(){
	//var sHTML = "<table class='table table-striped'><thead><tr><th scope='col'>Number</th><th scope='col'>Username</th><th scope='col'>Comment</th></tr></thead><tbody><tr></th></tr>";

	var sHTML = "<div class='row'><div class='col-sm'><h2>Number</h2></div><div class='col-sm'><h2>Username</h2></div><div class='col-sm'><h2>Comment<h2></div><div class='col-sm'><h2>Posted</h2></div></div></div>";

	   for(var i=0; i<talk.length; i++)
		{
			var age = Math.floor((Date.now() - talk[i].postdate)/1000);
			var agedisplay = "";
			
			if (age < 60) {
			agedisplay = "posted " + age + " seconds ago";
			} else if (age < 3600) {
			agedisplay = "posted " + Math.floor(age/60) + " minutes ago";
			} else {
			agedisplay = "posted " + Math.floor(age/3600) + " hours ago";
			}
			
			
			/* Create a row for each object and interleave it with HTML
			sHTML+= "<tr><th scope='row'>"+ (i+1) +"</th>";			
			sHTML += "<td>" + talk[i].username 
			+ "</td>" + "<td>" + talk[i].comment 
			+ "</td>" + "<td>" + agedisplay 
			+ "</td>" + "<td>" + "<button onclick='addLike()'>Like</button>" + "</td></tr>"; */

			sHTML+= "<div class='jumbotron'><div class='row'><div class='col-sm'>" + (i+1) + "</div>";
			sHTML+= "<div class='col-sm'>" + talk[i].username + "</div>" + "<div class='col-sm'>" + talk[i].comment + "</div>" + "<div class='col-sm'>" + agedisplay + "</div>" + "<button onclick='addLike()'>Like</button>" + "</div></div></div>";
		}

		
   sHTML += "</tbody></table>";

   document.getElementById("clientSideContent").innerHTML = sHTML;

	
}	

function addLike(){
				likes ++;
				alert("You have " + likes  + " likes!");
			}