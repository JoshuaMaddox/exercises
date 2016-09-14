$(document).ready(init);
  var name = '';
  var names = [];
  var randomNames = [];
  var teamList = [];
  var appendOnce = '';
  var counter = 0;
  var appender = '';


function init() {
	$('#add').click(addButtonClicked);
  $('#random').click(randomButtonClicked);
  $('#randomTeamsButton').click(randomTeamsTimeYeah);
  $('#groupTeams').click(teamGrouper)
}



function addButtonClicked() {
  reset();
  var $input = $('#name');
  var colorInput = $('#color').val();
  names = $input.val().split(',');
  $.each(names, function(index, value) {
     appendOnce += "<li class='teamMember'>" + value;
  });
  $('#list').append(appendOnce);
  randomTeamsTimeYeah();
  }

function reset() {
  $('#list').empty();
  name = '';
  names = [];
  randomNames = [];
  appendOnce = '';
}

function randomButtonClicked() {
  if(names.length === 0){
    alert('Please enter a list of comma separated names to get a random name');
  } else {
    name = names[Math.floor(Math.random()*names.length)];
    $('#ranName').text('Here is your random student: ' + name);
  }
  
}

function randomTeamsTimeYeah() {
  var currentIndex = names.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = names[currentIndex];
    names[currentIndex] = names[randomIndex];
    names[randomIndex] = temporaryValue;
  }
}

function teamGrouper(){
  $('#ranStudent').append("<h2>Random Teams</h2>" + "</br>");
  var numberOfTeamsInput = $('#numberOfTeams').val();
  var j = names.length;
  for(var i = 0; i < j; i++){
    if(counter <= numberOfTeamsInput && names.length > numberOfTeamsInput){
        counter++;
        console.log('I am counter: ' + counter);
        teamList.push(names.shift());
        if(teamList.length == numberOfTeamsInput) {
          for(i in teamList) {
            appender += ('<li>' + teamList[i] + '</li>'); 
          }
          $('#randomTeams').append(appender + '</br><hr>');
          counter = 0;
          appender = '';
          teamList = [];
        }        
    }    
    } 
  if(names.length > 0) {
    for(i in names) {
      appender += ('<li>' + names[i] + '</li>'); 
    }
    $('#randomTeams').append(appender + '</br><hr>');
    appender = '';
  }
  if(teamList.length > 0) {
    for(i in teamList) {
      appender += ('<li>' + teamList[i] + '</li>'); 
    }
    $('#randomTeams').append(appender);
  }
}


