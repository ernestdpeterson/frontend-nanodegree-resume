var Name1 = "Ernest D. Peterson";
var Role1 = "Web Developer";
var bio = {
    "FirstName" : "Ernest",
    "LastName" : "Peterson",
    "MiddleName" : "D.",
    "Role" : "Web Developer",
    "ContactCell" : "Cell 601-307-4377",
    "ContactEmail" : "petesplace312@yahoo.com",
    "PictureURL" : "images/smiley.gif",
    "Location" : "Pensacola, FL",
    "WelcomeMessage" : "Welcome To My Resume Page",
    "Skills" : [" SQL", " Truck Driver", " Carpenter", " Electrician", " Computer Repair", 
        " HTML & CSS"]
}
// Conditionals below this line
if(bio.Skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}
else {
    $("#header").append("DAMN!!!!!")
}
// Formatting below this line
var Name = HTMLheaderName.replace("%data%", Name1);
var Role = HTMLheaderRole.replace("%data%", Role1);
var formattedSkills = HTMLskills.replace("%data%", bio.Skills);
// appending below this line
$("#header").prepend(Role);
$("#header").prepend(Name);
//$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
