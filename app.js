// variables live here
var nameArray = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
var count = 0;
var teamSize = 0;
//functions live here
function shakeText(selector){
  for(var jiggle = 0; jiggle < 2; jiggle++){
    $(selector).animate({'padding-left' : '5px', 'margin-right' : '-=5'} , 50);
      $(selector).animate({'padding-left' : '0px', 'margin-right' : '+=5'} , 50);
  };
};
//jquery lives here and does stuff 
$(document).ready(function () {
  $(".numberButton").mouseover(function(){
      shakeText(this);
    });
  $(".numberButton").on('click', function(){
      $(this).siblings().removeClass("selected");
      teamSize = $(this).data("teamcount");
      $(this).addClass("selected");
  });
  $("#shuffleButton").on('click', function(){
    for (var num = 0; num <= 9; num++){
      $("#container").empty();
    };
    if(teamSize == 0){
      alert ("Please select number of teams!");
      return;
    }
    people = _.shuffle(nameArray);
    for (var i = 0; i < teamSize; i++){
    $("#container").append("<div id='team" + i + "' class='teamList'></div>").hide().slideDown(1000);
  }
    count=0;
    for(var j = 0; j < people.length; j++){
      $("#team" + count).append("<p>" + people[j] + "</p>");
      count++;
      if(count == teamSize){
        count=0;
      }
    }
  });
});
