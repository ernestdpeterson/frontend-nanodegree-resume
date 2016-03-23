var Name1 = "Ernest D. Peterson";
var Role1 = "Web Developer";
var bio = {
    "FirstName" : "Ernest",
    "LastName" : "Peterson",
    "MiddleName" : "D.",
    "Role" : "Web Developer",
    "contacts" : 
        {
            "github" : "ernestdpeterson",
            "mobile" : "601-307-4377",
            "email" : "petesplace312@yahoo.com",
            "location" : "Pensacola, FL",
        },
    "WelcomeMessage" : "Welcome To My Resume Page",
    "Skills" : [" SQL", " Truck Driver", " Carpenter", " Electrician", 
        " Computer Repair", " HTML & CSS", " Forklift Operator", " Mechanic", 
        " Welder", " JavaScript"],
    "pictureURL" : "images/me.jpeg"
}
var Name = HTMLheaderName.replace("%data%", Name1);
var Role = HTMLheaderRole.replace("%data%", Role1);
var formattedSkills = HTMLskills.replace("%data%", bio.Skills);
var pic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").prepend(Role);
$("#header").prepend(Name);
$("#header").prepend(pic);
if(bio.Skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}
$("#skills").append(formattedSkills);
var education = {
    "schools" : [
        {
            "name" : "Jones County Junior College-Extension",
            "location" : "Ellisville, MS",
            "degree" : "Production Welder",
            "majors" : "",
            "url" : "http://www.jcjc.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Database Administration and Linux Systems Administration",
            "school" : "O'Reilly School of Technology",
            "dates" : "",
            "url" : "http://www.oreillyschool.com/"
            
        },
        {
            "title" : "CompTIA A+ and Network+",
            "school" : "University of Phoenix",
            "dates" : "",
            "url" : "http://www.phoenix.edu/"
        },
        {
            "title" : "Front End Web Developer", 
            "school" : "Udacity",
            "dates" : "",
            "url" : "https://www.udacity.com/"
        }
    ]
}
//$("#education").append(HTMLschoolStart);
var work = {
    "jobs" : [
        {
            "employer" : "Airgas/Dry Ice",
            "title" : "Truck Driver",
            "location" : "Star, MS",
            "dates" : "6/2008-current",
            "description" : "Loading, delivering and unloading liquid CO2 or Dry Ice."
        },
        {
            "employer" : "Peterson Transportation",
            "title" : "Owner/Operator",
            "location" : "Seminary, MS",
            "dates" : "4/2003-6/2008",
            "description" : "Owned and operated all aspects of a trucking company."
        },
        {
            "employer" : "Flying J",
            "title" : "Truck Driver",
            "location" : "Perl, MS",
            "dates" : "10/1999-4/2003",
            "description" : "Loading and delivering fuel to Flying J Truckstops."
        },
        {
            "employer" : "Fleet Morris",
            "title" : "Truck Driver",
            "location" : "Collins, MS",
            "dates" : "5/1997-10/1999",
            "description" : "Fuel delivery to varios gas stations."
        },
        {
            "employer" : "Sanderson Farms",
            "title" : "Manager, Truck Driver",
            "location" : "Collins, MS",
            "dates" : "11/1993-5/1997",
            "description" : "Managed spray crew and drove live haul."
        },
        {
            "employer" : "T&L Trucking",
            "title" : "Truck Driver",
            "location" : "Ellisville, MS",
            "dates" : "2/1991-11/1993",
            "description" : "Delivered parts from/to GM warehouses and plants."
        }
    ]
}
work.display = function(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
        var title1 = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = employer1 + title1;
        var local = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var edates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var tell = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle).append(local).append(edates)
        .append(tell);
    }
}();
var projects = {
    "projects" : [
        {
        "title" : "JavaScript Tutorial",
        "dates" : "2/2015-3/2015",
        "description" : "Studied JavaScript tutorial and completed test quiz.",
        //"images" : "images/smiley.gif"
        },
        {
        "title" : "Front End Web Developer",
        "dates" : "11/2015-current",
        "description" : "Learning the various aspects of web page development",
        "images" : "images/smiley.gif"
        }
    ]
}
projects.display = function(){
    for (x in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var fTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
        var fDate = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
        var fDescription = HTMLprojectDescription.replace("%data%", 
            projects.projects[x].description);
        var fImage = HTMLprojectImage.replace("%data%", projects.projects[x].images);
        $(".project-entry:last").append(fTitle).append(fDate).append(fDescription);
        if (projects.projects[x].images != null){
            $(".project-entry:last").append(fImage);
        }
    }
}();
$("#mapDiv").append(googleMap);
