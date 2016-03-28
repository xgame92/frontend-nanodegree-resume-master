var name = "Yiğit";
var role = "Sofware Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skillStart = HTMLskillsStart;
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
document.getElementById('education').style.display = "none";

if (quiz == true) {
    $("#header").prepend(skillStart);
} else {

}

var work = {
    "job": [{
        "employer": "ali",
        "title": "alinin işi",
        "location": "Türkiye",
        "dates": "04.04.2017",
        "description": "alinin işi çok iyi"
    }, {
        "employer": "veli",
        "title": "velinin işi",
        "location": "Almanya",
        "dates": "03.03.2017",
        "description": " bu veli çok çalışkan"
    }]

}

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
        "location": "IZMIR"
    },
    "welcomeMessage": "Hoşgeldin yiğit usta",
    "skills": [
        "php", "javascript", "android"
    ],
    "bioPic": "url"
}

var education = {
    "school": [{
        "name": "Izmir University",
        "location": "Turkey",
        "degree": "Master",
        "majors": ["CS02"],
        "dates": 2017,
        "url": "url"
    }, {
        "name": "Izmir University",
        "location": "Turkey",
        "degree": "Master",
        "majors": ["CS02"],
        "dates": 2017,
        "url": "url"
    }],
    "onlineCourse": [{
        "title": "Javascript Awesome Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "www.anonym.com"
    }]


}


//$("#header").append(skills);

console.log(HTMLheaderName);
console.log(formattedRole);
