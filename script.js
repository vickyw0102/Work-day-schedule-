var currentDay = $("#currentDay");
var today =dayjs();
currentDay.text(today.format('dddd MMMM DD'));
function timeBlock(){
    var timeBlock = $ ("#timeBlocksContainer");
    var timeBlockDiv = ("<div>")
    var currentHours = dayjs ().hour();
    console.log(currentHours);
    timeBlock.addClass('.time-block');


}