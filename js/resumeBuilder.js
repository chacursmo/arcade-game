//Resumebuilder file for building interactive resume
//bio object
var bio = {
    "name": "Sam Crouch",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "254-205-1317",
        "email": "chacursmo@gmail.com",
        "github": "chacursmo",
        "twitter": "@chacursmo",
        "location": "Itasca, Texas"
    },
    "welcomeMessage": "Greetings my friend; shall we be informal?",
    "skills": [
        "HTML",
        "CSS",
        "Javascript",
        "Photography",
        "Visual Design",
        "C/Python Programming"
    ],
    "biopic": "images/me.jpg",
    "display": function() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedHeaderRole);
        $("#header").prepend(formattedHeaderName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        var formWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formLoc);
        $("#header").append(formWelcome);
        $("#header").append(formattedBioPic);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var ind = 0; ind < bio.skills.length; ind++) {
                var formSkills = HTMLskills.replace("%data%", bio.skills[ind]);
                $("#skills").append(formSkills);
            }
        }
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formLoc);
    }
};

var work = {
    "jobs": [{
        "employer": "Alvarado ISD",
        "title": "Technology Facilitator",
        "location": "Alvarado, Texas",
        "dates": "2005-2006",
        "description": "Supported Two Campus' Administrators and " +
            "Faculties within a mid-size school district in a rural " +
            "area. Developed scripts to maintain software " +
            "productivity. In concert with School Teachers " +
            "generated STEM classroom content. Implemented " +
            "conversion of www.alvaradoisd.net web site into " +
            "open source content management system."
    }, {
        "employer": "Verizon",
        "title": "Tier Two Network Support",
        "location": "Southlake, Texas",
        "dates": "2012",
        "description": "Interpreted network data from customer " +
            "reported service interruptions and diagnosed proper " +
            "steps towards resolution."
    }],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

var education = {
    "schools": [{
        "name": "University of Texas",
        "location": "Austin, Texas",
        "degree": "BA",
        "majors": ["Religious Studies"],
        "dates": "2012",
        "url": "www.utexas.edu"
    }, {
        "name": "Udacity",
        "location": "Itasca, Texas",
        "degree": "NanoDegree",
        "majors": ["Front End Web Development"],
        "dates": "In Progress",
        "url": "www.udacity.com"
    }],
    "onlineCourses": [{
        "title": "Learning How to Learn: Powerful " +
            "mental tools to help you master tough subjects",
        "school": "Coursera",
        "dates": "2015",
        "url": "www.coursera.org"
    }, {
        "title": "Machine Learning",
        "school": "Coursera",
        "dates": "2016",
        "url": "www.coursera.org"
    }, {
        "title": "Introduction to Programming with Java " +
            "- Part 1: Starting to Program in Java",
        "school": "edX",
        "dates": "2015",
        "url": "www.edx.org"
    }, {
        "title": "Introduction to Computer Science " +
            "and Programming Using Python",
        "school": "edX",
        "dates": "2016",
        "url": "www.edx.org"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var index = 0; index < education.onlineCourses.length; index++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Installation of Computer Labs",
        "dates": "2005",
        "description": "Unpacked newly purchased Dell " +
            "Desktop Computers, Installed appropriate " +
            "software, Transported Computers to School " +
            "Site, Ensured network connectivity with ethernet " +
            "cable, Performed final adjustments on operating systems.",
        "images": ["images/hmm.jpg"]
    }, {
        "title": "Open Source Content Management System Web Site Conversion",
        "dates": "2006",
        "description": "Surveyed and archived district " +
            "web site, installed LAMP software, debugged " +
            "open source content management system, Named " +
            "Joomla Jedi by coworkers.",
        "images": ["images/whoa.jpg"]
    }, {
        "title": "Sentient Electronic Pet Rock",
        "dates": "2016 - Present",
        "description": "Using notion of a bicameral " +
            "computer, reasoning aptitude for deep ideas, " +
            "and learning from online electronic course: " +
            "building the toy everyone desires to have, " +
            "whom which is thinking.",
        "images": ["images/whoo.jpg"]
    }]
};

projects.display = function() {
    for (var index = 0; index < projects.projects.length; index++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
        $(".project-entry:last").append(formattedProjectDescription);


    }
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
        $(".project-entry:last").append(formattedProjectImage);
    }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(nameStr) {
    var result = [];
    result = nameStr.split(" ");
    var firstName = result[0];
    var lastName = result[1];
    lastName = lastName.toUpperCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    var res = firstName + " " + lastName;
    return res;
}
