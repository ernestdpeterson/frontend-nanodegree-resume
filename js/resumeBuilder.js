/*
This is empty on purpose! Your code to build the resume will go here.
 var awesomeThoughts = "I am Ernest and I am AWSOME!";
 console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWSOME", "FUN"); 
 var A = ["sponge", "salt", "bacon", "pizza"] 
 var A = ["sponge salt", "bacon", "pizza"];
 var space = " ";
 var Aa = A[0];
 var Ab = Aa.slice(1);
 var Ac = Aa[0];
 var Ad = (Ac.toUpperCase() + Ab);
 var Ae = Aa.split(space)*/
 /*$("#main").append(A.length);*/
/*$("#main").append(Ae[0]);*/
var formattedName = "Ernest D. Petereson";
var formattedRole = "Web Developer";
var Role = HTMLheaderRole.replace("%data%", formattedRole);
var Name = HTMLheaderName.replace("%data%", formattedName);
$("#header").prepend(Role);
$("#header").prepend(Name);
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
    "Skills" : ["SQL", "Truck Driver", "Carpentry", "Electrician", "Computer Repair", 
        "HTML & CSS"]
};
var space = " ";
var wmessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
var bodyname = HTMLcontactGeneric.replace("%contact%", bio.FirstName + space + 
    bio.MiddleName + space + bio.LastName).replace("%data%", bio.Role);
var mainimage = HTMLbioPic.replace("%data%", bio.PictureURL);
var email = HTMLemail.replace("%data%", bio.ContactEmail);
var cell = HTMLmobile.replace("%data%", bio.ContactCell);
var locality = HTMLlocation.replace("%data%", bio.Location)
$("#header").append(mainimage);
$("#header").append(wmessage);
$("#header").append(bodyname);
$("#header").append(email);
$("#header").append(cell);
$("#header").append(locality);
