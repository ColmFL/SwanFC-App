function displayVehicles() {
   var sHTML = "<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>Make</th><th scope='col'>Model</th><th scope='col'>Age</th></tr></thead><tbody><tr><th scope='row'>1</th>";
	   var vehicle [] = {
for (var i = 0; i < document.getElementsByTagName('input').length; i++)
{
    foo[document.getElementsByTagName("input")[i].name] = document.getElementsByTagName("input")[i].value;
};
	   sHTML += "<td>" + vehicle.make + "</td>" + "<td>" + vehicle.model + "</td>" + "<td>" + vehicle.age + "</td></tr>";   
   sHTML += "</tbody></table>";
   clientSideContent.innerHTML = sHTML;
}