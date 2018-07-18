$('.name').hide().fadeIn(1500);

$('.skill').hide();

var skillList = [".artist", ".copywriter", ".coder"]

var fadeIn = function(skill, i) {
    var delay = (i + 1) * 500;
    $(skill).delay(delay).fadeIn(1500);

};

for (i = 0; i <= skillList.length; i += 1) {
 fadeIn(skillList[i], i);
};
