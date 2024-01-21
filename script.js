var currentDay = $("#currentDay");
var today =dayjs();
currentDay.text(today.format('dddd MMMM DD'));
// function timeBlock(){
//     var timeBlock = $ ("#timeBlocksContainer");
//     var timeBlockDiv = ("<div>")
//     var currentHours = dayjs ().hour();
//     console.log(currentHours);
//     timeBlock.addClass('.time-block');
// }
$(".time-div").each(function(){
    var timeDiv = $(this).attr("id").split("-")[1];
    var currentHours = dayjs ().hour();
    console.log(currentHours);
    timeBlock.addClass('.time-div');

    if(currentHours==timeDiv){
        $(this).addClass("present");
        $(this).children(".item").addClass("white-text");
        } else if (currentHours <timeDiv) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).children(".item").addClass("grey-text");
            
        } else if (currentHours> timeDiv){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
            $(this).children(".item").addClass("grey-text");
        }
});

$(".btn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-div").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    });

    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-div").val(localStorage.getItem("09"));
    $("#hour-10 .time-div").val(localStorage.getItem("10"));
    $("#hour-11 .time-div").val(localStorage.getItem("11"));
    $("#hour-12 .time-div").val(localStorage.getItem("12"));
    $("#hour-13 .time-div").val(localStorage.getItem("13"));
    $("#hour-14 .time-div").val(localStorage.getItem("14"));
    $("#hour-15 .time-div").val(localStorage.getItem("15"));
    $("#hour-16 .time-div").val(localStorage.getItem("16"));
    $("#hour-17 .time-div").val(localStorage.getItem("17"));


