// $('.name').animate({opacity:1}, 1500);

$('.name').hide().fadeIn(1500);

$('.skill').hide();

var skillList = [".coder", ".copywriter", ".artist"]

var fadeIn = function(skill, i) {
    var delay = (i + 1) * 500;
    $(skill).delay(delay).fadeIn(1500);

};

for (i = 0; i <= skillList.length; i += 1) {
 fadeIn(skillList[i], i);
};
