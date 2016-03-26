
var name = "Yiğit";
var role = "Sofware Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["awesomeness", "programing", "teaching","JS"];

var bio = {
  name : "Yiğit",
  role : "Sofware Engineer",
  contact : "izmir",
  picture_url : "www.yigittanriverdi.com",
  welcome_message : "wellcome to my page"
}
//$("#header").append(skills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append()
console.log(HTMLheaderName);
console.log(formattedRole);
ai@
