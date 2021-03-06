var bio = {
  'name': 'Sandeep Danta',
  'role': 'Software Developer',
  'contacts': [{
    'mobile': '+919046452579',
    'email': 'sandeep.danta@gmail.com',
    'github': 'devmaestro',
    'twitter': '@SandeepDanta',
    'location': 'Bangalore'
  }],
  'welcomeMessage': 'Hello!',
  'skills': ['html', 'css', 'javascript', 'asp.net mvc', 'nodejs', 'mongodb', 'hapijs', 'android'],
  'biopic': 'fry.jpg',
  'display': function() {
    this.displayHeader();
    this.displayBioPic();
    this.displayWelcomeMessage();
    this.displaySkills();
    this.displayContacts();
  },
  'displayHeader': function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
  },
  'displayContacts': function() {
    $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts[0].mobile));
    $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts[0].email));
    $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts[0].github));
    $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts[0].twitter));
    $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts[0].location));
  },
  'displayWelcomeMessage': function() {
    $('#welcomeMessage').append(HTMLWelcomeMsg.replace('%data%',this.welcomeMessage));
  },
  'displayBioPic': function() {
    $('#topBio').prepend(HTMLbioPic.replace('%data%', '/images/'+this.biopic));
  },
  'displaySkills': function() {
    var skillsHTML = HTMLskillsStart;
    for(var skill in bio.skills) {
      skillsHTML += HTMLskills.replace('%data%', bio.skills[skill]);
    }
    skillsHTML = skillsHTML + HTMLskillsEnd;
    $('#topSkills').append(skillsHTML);
  }
};
var education = {
'schools': [{
  'name': 'Indian Institute of Technology (IIT), Kharagpur',
  'location': 'Kharagpur, India',
  'degree': '5yr B.Tech + M.Tech Dual Degree',
  'majors': ['Ocean Engineering and Naval Architecture'],
  'dates': 'Jul 2009 - May 2014',
  'url': 'http://www.iitkgp.ac.in'
}],
'onlineCourses': [],
'displaySchools': function() {
  for(var school in this.schools) {
    var entrySchoolName = HTMLschoolName.replace('%data%', this.schools[school].name);
    var entrySchoolLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
    var entrySchoolDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
    var entrySchoolMajors = HTMLschoolMajor.replace('%data%', this.schools[school].majors[0]);
    var entrySchoolDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
    $('#education').append(HTMLschoolStart + entrySchoolName + entrySchoolDegree + entrySchoolDates + entrySchoolLocation + entrySchoolMajors + HTMLschoolEnd);
  }
},
'display': function() {
  this.displaySchools();
}
};
var work = {
  'jobs': [{
    'employer': 'Babajob Services Pvt. Ltd.',
    'title': 'Software Developer',
    'location': 'Bangalore, India',
    'dates': 'Jun 2014 - Present',
    'description': ''
  }],
  'display': function() {
    this.displayWorkExperience();
  },
  'displayWorkExperience': function() {
    for(var job in this.jobs) {
      var entryWorkEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
      var entryWorkTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
      var entryWorkDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
      var entryWorkLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
      var entryWorkDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
      $('#workExperience').append(HTMLworkStart + entryWorkEmployer + entryWorkTitle + entryWorkDates + entryWorkLocation + entryWorkDescription + HTMLworkEnd);
    }
  }
};
var projects = {
  'projects': [{
    'title': 'chatsy',
    'url': 'http://chatsy-alpha.herokuapp.com',
    'dates': 'Oct 2014 - Present',
    'description': 'A simple but flexible group based chat application for web and android',
    'images': []
  }, {
    'title': 'Traffic Hell',
    'url': 'http://devmaestro.github.io/games/survive/index.html',
    'dates': 'Dec 2014 - Present',
    'description': 'A HTML5 game (partial clone of FROGGER) made using pure javascript',
    'images': ['proj3-1.png']
  }, {
    'title': 'BPO Job Search',
    'url': 'https://play.google.com/store/apps/details?id=com.babajob.app&hl=en',
    'dates': 'Jun 2014 - Aug 2014',
    'description': 'An android application for Call-center job search using babajob\'s API',
    'images': ['proj2-1.png', 'proj2-2.png', 'proj2-3.png', 'proj2-4.png']
  }, {
    'title': 'TnP Lite',
    'url': 'https://play.google.com/store/apps/details?id=com.limelitesolutions.tnplite',
    'dates': 'Jun 2013 -  Aug 2013',
    'description': 'An android application developed for the students of IIT Kharagpur facilitating them to Browse ' +
    'through, Get instant notificiations and Search for Training and Placement Notices, anywhere in the campus',
    'images': ['proj1-1.png', 'proj1-2.png', 'proj1-3.png', 'proj1-4.png']
  }],
  'display': function() {
    this.displayProjects();
  },
  'displayImagesInProject': function(project) {
    var entryProjectImages = '';
    if(project != undefined && project.images != undefined) {
      for(var image in project.images) {
        var entryProjectImage = HTMLprojectImage.replace('%data%', '/images/' + project.images[image]);
        entryProjectImages += entryProjectImage;
      }
    }
    return entryProjectImages;
  },
  'displayProjects': function() {
    for(var project in this.projects) {
      var entryProjectTitleLinkStart = HTMLprojectLinkStart.replace('%data%', this.projects[project].url);
      var entryProjectTitle = HTMLprojectLinkTitle.replace('%data%', this.projects[project].title);
      var entryProjectDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
      var entryProjectDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
      var entryProjectImages = this.displayImagesInProject(this.projects[project]);
      $('#projects').append(HTMLprojectStart + entryProjectTitleLinkStart + entryProjectTitle +
        HTMLprojectLinkEnd + entryProjectDates + entryProjectDescription + entryProjectImages + HTMLprojectEnd);
    }
  }
};
var addMap = function() {
  $('#mapDiv').append(googleMap);
}
var buildResume = function() {
  bio.display();
  education.display();
  projects.display();
  work.display();
  addMap();
}

buildResume();
