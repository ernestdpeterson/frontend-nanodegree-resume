var bio = {
    name : "Ernest D. Peterson",
    role : "Web Developer",
    contacts : {
        mobile : "601-307-4377",
        email : "petesplace312@yahoo.com",
        github : "ernestdpeterson@github.com",
        location : "Pensacola, FL",
    },
    welcomeMessage : "Welcome To My Resume Page",
    skills : [
        "SQL", " Truck Driver", " Carpenter", " Electrician",
        " Computer Repair", " HTML & CSS", " Forklift Operator", " Mechanic",
        " Welder", " JavaScript"
    ],
    biopic : "images/longAgo.jpg"
};
bio.display = function(){
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);
    var Contact = HTMLcontactGeneric.replace("%contact%", "Correspondence Welcome at:").replace("%data%", " ");
    var Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var Email = HTMLemail.replace("%data%", bio.contacts.email);
    var Github = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    var pic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(Role);
    $("#header").prepend(Name);
    $("#header").prepend(pic);
    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
    }
    $("#skills").append(formattedSkills);
    // $("#header").append(Contact);
    // $("#header").append(Mobile);
    // $("#header").append(Email);
    // $("#header").append(Github);
    $("#header, #footerContacts").append(Contact + Mobile + Email + Github);
}();
var education = {
    schools : [
        {
            name : "Jones County Junior College-Extension",
            location : "Ellisville, MS",
            degree : "Production Welder",
            majors : ["Production Welder"],
            dates : "2010",
            url : "http://www.jcjc.edu/"
        }
    ],
    onlineCourses : [
        {
            title : "Database Administration",
            school : "O'Reilly School of Technology",
            dates : "2014",
            url : "http://www.oreillyschool.com/"

        },
        {
            title : "Linux Systems Administration",
            school : "O'Reilly School of Technology",
            dates : "2015",
            url : "http://www.oreillyschool.com/"

        },
        {
            title : "CompTIA A+ and Network+",
            school : "University of Phoenix",
            dates : "2014",
            url : "http://www.phoenix.edu/"
        },
        {
            title : "Front End Web Developer",
            school : "Udacity",
            dates : "2016",
            url : "https://www.udacity.com/"
        },
        {
            title : "JavaScript Tutorial",
            school : "W3School.com",
            dates : "2/2016-3/2016",
            url : "https://www.w3schools.com/js/default.asp"
        }
    ],
    display : function () {
        if (education.schools.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);
                var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry:last").append(schoolName).append(schoolDegree).append(schoolDates).append(schoolLocation);
                for (var a = 0; a < education.schools[i].majors.length; a++){
                    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[a]);
                    $(".education-entry").append(schoolMajor);
                }
            }
        }
        $(".education-entry").append(HTMLonlineClasses);
        for (var x = 0;  x < education.onlineCourses.length; x++){
            var onlineTitle = HTMLonlineTitle.replace("%data%", education
                .onlineCourses[x].title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education
                .onlineCourses[x].school);
            var onlineDates = HTMLonlineDates.replace("%data%", education
                .onlineCourses[x].dates);
            var onlineURL = HTMLonlineURL.replace("%data%", education
                .onlineCourses[x].url);
            $(".education-entry").append(onlineTitle).append(onlineSchool)
                .append(onlineDates).append(onlineURL);
        }
    }
};
education.display();

var work = {
    jobs : [
        {
            employer : "Airgas/Dry Ice",
            title : "Truck Driver",
            location : "Star, MS",
            dates : "6/2008-current",
            description : "Loading, delivering and unloading liquid CO2 or Dry Ice."
        },
        {
            employer : "Peterson Transportation",
            title : "Owner/Operator",
            location : "Seminary, MS",
            dates : "4/2003-6/2008",
            description : "Owned and operated all aspects of a trucking company."
        },
        {
            employer : "Flying J",
            title : "Truck Driver",
            location : "Perl, MS",
            dates : "10/1999-4/2003",
            description : "Loading and delivering fuel to Flying J truck stops."
        },
        {
            employer : "Fleet Morris",
            title : "Truck Driver",
            location : "Collins, MS",
            dates : "5/1997-10/1999",
            description : "Fuel delivery to various gas stations."
        },
        {
            employer : "Sanderson Farms",
            title : "Manager, Truck Driver",
            location : "Collins, MS",
            dates : "11/1993-5/1997",
            description : "Managed spray crew and drove live haul."
        },
        {
            employer : "T&L Trucking",
            title : "Truck Driver",
            location : "Ellisville, MS",
            dates : "2/1991-11/1993",
            description : "Delivered parts from/to GM warehouses and plants."
        }
    ],
    display : function(){
        for (var job = 0;  job < work.jobs.length; job++){
            $("#workExperience").append(HTMLworkStart);
            var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var title1 = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = employer1 + title1;
            var local = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var edates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var tell = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployerTitle).append(local).append(edates)
            .append(tell);
        }
    }
};
work.display();

var projects = {
    projects : [
        {
            title : "JavaScript Tutorial",
            dates : "2/2016-3/2016",
            description : "Studied JavaScript tutorial and completed test quiz.",
            images : [
                "images/smiley.gif"
            ]
        },
        {
            title : "Front End Web Developer",
            dates : "11/2015-current",
            description : "I didn't have any projects at the time so I put these.",
            images : [
                "images/smiley.gif"
            ]
        }
    ],
    display : function(){
        for (var a = 0; a < projects.projects.length; a++){
            $("#projects").append(HTMLprojectStart);
            var fTitle = HTMLprojectTitle.replace("%data%", projects.projects[a].title);
            var fDate = HTMLprojectDates.replace("%data%", projects.projects[a].dates);
            var fDescription = HTMLprojectDescription.replace("%data%",
                projects.projects[a].description);
            var fImage = HTMLprojectImage.replace("%data%", projects.projects[a].images);
            $(".project-entry:last").append(fTitle).append(fDate).append(fDescription);
            if (projects.projects[a].images !== null){
                $(".project-entry:last").append(fImage);
            }
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);
