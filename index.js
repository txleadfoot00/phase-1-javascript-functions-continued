function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (mw = "go to the office") {
    return `This Monday, I will ${mw}.`;
}
function wrapAdjective (flair) {
    return function (encouragement) {
        return `You are ${flair}${encouragement}${flair}!`;
    }
}