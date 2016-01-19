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
