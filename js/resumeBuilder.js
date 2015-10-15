var work = {
    'jobs': [{
        'employer': "Kebab Kingdom",
        'title': "waiter",
        'location': "WuHan",
        'dates': "2014",
        'description': "I worked there because I can get Kebab for free "
    }],
    display: function() {
        var len = work.jobs.length;
        for (var i = 0; i < len; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWork = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedWork);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

var projects = {
    'Projects': [{
        'title': "Design of Automatic Stations Broadcasting In Bus",
        'dates': "2012",
        'description': "A device informs passengers the name of next station by loudspeaker automatically ",
        'url': ['images/bus.jpg']
    }, {
        'title': "Indoor wireless positioning",
        'dates': "2015",
        'description': "Using Zigbee wireless protoccol to calulate the postion of a target in indoor environment ",
        'url': ['images/zigbee.jpg']
    }]
};

var bio = {
    'name': 'Xiong Xiao',
    'role': 'Web Developer',
    'welcomeMessage': 'Winter is coming but You Know Nothing',
    'contacts': {
        'mobileNumber': '13707124204',
        'email_address': 'bearkb24@gmail.com',
        'github': 'tpjay11',
        'twitter': 'bearkb24',
        'location': 'Sydney'
    },
    'skills': ['Basketball', 'Python', 'Matlab', 'Web Design', 'Circuit Design'],
    'url': 'images/fry.jpg'
};

var education = {
    'schools': [{
        'name': 'Huazhong University of Science and Technology',
        'location': "WuHan",
        'degree': 'Bachelor',
        'major': 'Optical Information Technology',
        'dates': "2012",
        "url": "www.hust.edu.cn"
    }, {
        'name': "University of Sydney",
        'location': "Sydney",
        'degree': "Master",
        'major': "Electrical Engineering",
        'dates': "2015",
        "url": "http://sydney.edu.au"
    }],
    'onlineCourses': [{
        'title': "Front-End Web Developer Nanodegree",
        'school': "Udacity",
        'dates': "2016",
        'url': "https://www.udacity.com"
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email_address);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.url);
    var formattedNumber = HTMLmobile.replace("%data%", bio.contacts.mobileNumber);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedNumber);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedtwitter);
    $("#topContacts").append(formattedgithub);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedNumber);
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedgithub);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    var len = bio.skills.length;
    for (var i = 0; i < len; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

};

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

projects.display = function() {
    var len = projects.Projects.length;
    for (var i = 0; i < len; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[i].title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.Projects[i].dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[i].description);
        $(".project-entry:last").append(formattedprojectDescription);
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.Projects[i].url);
        $(".project-entry:last").append(formattedprojectImage);
    }
};

education.display = function() {
    var len = education.schools.length;
    for (var i = 0; i < len; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedschoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
    $(".education-entry:last").append(formattedonlineTitleSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
    $(".education-entry:last").append(formattedonlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
    $(".education-entry:last").append(formattedonlineURL);

};

bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
    var location = [];
    var work = work_obj;
    var len = work.jobs.length;
    for (var i = 0; i < len; i++) {
        location.push(work.jobs[i].location);
    }
    return location;
}

function inName(name) {
    name = name.split(" ");
    firstName = name[0];
    lastName = name[1];
    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();
    return firstName + ' ' + lastName;

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);