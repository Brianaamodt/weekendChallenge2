// variables live here
var nameArray = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
var count = 0;
var teamSize = 0;
//functions live here
function shakeText(selector){
  $(selector).animate({'padding-left' : '5px'} , 50 , function(){
    $(selector).animate({'padding-left' : '0px'} , 50, function(){
      $(selector).animate({'padding-left' : '5px'} , 50 , function(){
        $(selector).animate({'padding-left' : '0px'} , 50)
      });
    });
  });
};
function clearTeams(){
  $("#team0").empty();
  $("#team1").empty();
  $("#team2").empty();
  $("#team3").empty();
  $("#team4").empty();
  $("#team5").empty();
  $("#team6").empty();
  $("#team7").empty();
  $("#team8").empty();
  $("#team9").empty();
}
//jquery lives here and does stuff 
$(document).ready(function () {
  $(".numberButton").on('click', function(){
      shakeText(this);
      teamSize = $(this).data("teamcount");
      console.log(teamSize);
  });
  $("#shuffleButton").on('click', function(){
    clearTeams();
    if(teamSize == 0){
      alert ("Please select number of teams!");
      return;
    }else{
      people = _.shuffle(nameArray);
    }
    count=0;
    for(var i = 0; i < people.length; i++){
      $("#team" + count).append("<p>" + people[i] + "</p>");
      count++;
      if(count == teamSize){
        count=0;
      }
    }
  });
});