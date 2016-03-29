
var projects = {

    "project": {
        "title": "alinin projesi",
        "dates": "03.02.2017",
        "worked": 15,
        "description": "nasıl bi proje bu ya açıklama yok",
        "images": ["buraya proje resimi gelecek", "2. proje resimi"]
    },
    "project": {
        "title": "alinin projesi",
        "dates": "03.02.2017",
        "worked": 15,
        "description": "nasıl bi proje bu ya açıklama yok",
        "images": ["buraya proje resimi gelecek", "2. proje resimi"]
    }
}

var bio = {
    "name": "yiğit Tanrıverdi",
    "role": "yazılımcı arkadaş",
    "contacts": {
        "mobile": null,
        "email": "yigittanriverdi@yandex.com",
        "github": "xgame92",
        "twitter": "hloqer",
        "location": "izmir"
    },
    "welcomeMessage": "Hoşgeldin yiğit usta",
    "skills": [
        "php", "javascript", "android"
    ],
    "bioPic": "url"
}

var education = {

    "school": [
        {
            "name": "Izmir University",
            "location": "Turkey",
            "degree": "Master",
            "majors": ["CS02"],
            "dates": 2017,
            "url": "url"
        },
        {
            "name": "Izmir University",
            "location": "Turkey",
            "degree": "Master",
            "majors": ["CS02"],
            "dates": 2017,
            "url": "url"
        }
    ],
    "onlineCourse": [{
        "title": "Javascript Awesome Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "www.anonym.com"
    }]
}

var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};


function displayWork(){
    for (job in work.jobs){
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTittle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTittle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDesctiption = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDesctiption);

    }
}
displayWork();
//  mouser click locationizer
// $(document).click(function (loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x,y);
// });

$("#main").append(internationalizeButton);

function inName(name) {
       name =  name.trim().split(' ');
    return name[0].charAt(0).toUpperCase() + name[0].slice(1) + " " + name[1].toUpperCase();
}

$("#mapDiv").append(googleMap);

// var outsideExample = "First string";
// if (true) {
//     var outsideExample = "Second string";
//     console.log(outsideExample);
// }
// console.log(outsideExample);

//$("#header").append(skills);
// var name = "Yiğit";
// var role = "Sofware Engineer";
//
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// var skillStart = HTMLskillsStart;
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
//

// console.log(HTMLheaderName);
// console.log(formattedRole);
