

// $('.name').hide().fadeIn(1500);
$('.name').fadeTo(1500, 1);

// $('.skill').hide();

var skillList = [".coder", ".copywriter", ".artist"]

var fadeThisIn = function(skill, i) {
    var delay = (i + 1) * 500;
    $(skill).delay(delay).fadeTo(1500, 1);

};

for (i = 0; i <= skillList.length; i += 1) {
 fadeThisIn(skillList[i], i);
};
