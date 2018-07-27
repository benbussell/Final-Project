

// fade in name
$('.name').fadeTo(1500, 1);


//fade in skills
var skillList = [".coder", ".copywriter", ".artist"]

var fadeThisIn = function(skill, i) {
    var delay = (i + 1) * 500;
    $(skill).delay(delay).fadeTo(1500, 1);

};

// loop to stagger timing on skill fade-in
for (i = 0; i <= skillList.length; i += 1) {
 fadeThisIn(skillList[i], i);
};
