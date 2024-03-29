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
    // timeBlockContainer.addClass('.time-div');

    if(currentHours==timeDiv){
        $(this).addClass("present");
        $(this).children(".item").addClass("grey-text");
        } else if (currentHours <timeDiv) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).children(".item").addClass("white-text");
            
        } else if (currentHours> timeDiv){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
            $(this).children(".item").addClass("white-text");
        }
});

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".item").val();
    var time = $(this).parent().attr("id");
    console.log(value, time);
    localStorage.setItem(value, time);
    });

    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .item").val(localStorage.getItem("09"));
    $("#hour-10 .item").val(localStorage.getItem("10"));
    $("#hour-11 .item").val(localStorage.getItem("11"));
    $("#hour-12 .item").val(localStorage.getItem("12"));
    $("#hour-13 .item").val(localStorage.getItem("13"));
    $("#hour-14 .item").val(localStorage.getItem("14"));
    $("#hour-15 .item").val(localStorage.getItem("15"));
    $("#hour-16 .item").val(localStorage.getItem("16"));
    $("#hour-17 .item").val(localStorage.getItem("17"));
    $("#hour-18 .item").val(localStorage.getItem("18"));
    $("#hour-19 .item").val(localStorage.getItem("19"));
    $("#hour-20 .item").val(localStorage.getItem("20"));
    $("#hour-21 .item").val(localStorage.getItem("21"));
    $("#hour-22 .item").val(localStorage.getItem("22"));
    $("#hour-23 .item").val(localStorage.getItem("23"));
    $("#hour-24 .item").val(localStorage.getItem("24"));

