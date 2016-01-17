/*
This is empty on purpose! Your code to build the resume will go here.
 var awesomeThoughts = "I am Ernest and I am AWSOME!";
 console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWSOME", "FUN");
 $("#main").append(funThoughts);
  */
  var formattedName = "Ernest D. Petereson";
  var formattedRole = "Web Developer";
  var Role = HTMLheaderRole.replace("%data%", formattedRole);
  var Name = HTMLheaderName.replace("%data%", formattedName);
  $("#header").prepend(Role);
  $("#header").prepend(Name);
