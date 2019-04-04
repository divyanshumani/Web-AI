//this file contains all the function used throughout the whole program
function wake(){
  //wakes up the mirror
  $("#welcome:hidden:first").fadeIn(2000);
  $("#welcome").fadeOut(1000, function(){
  $("#container:hidden:first").fadeIn(2000);
  });
}

function mischief_managed(){
  //turns the mirror off
  $("#container").fadeOut();
  $("#mm:hidden:first").fadeIn(2000);
  $("#mm").fadeOut(2000);
}

function clear_all(){
  //clears the screen of the whole mirror
  $("#container").slideUp();
}

function show_all(){
  // shows the screen of the whole mirror ( used to undo the clear_all function)
  $("#container").slideDown();
}

function play_song(input){
  //function to assign file names to the SongFileName variable according to the requested song
  var SongName=input;
  var SongFileName=SongName;
  switch (SongName) {
    case 'Hotel California':
          SongFileName='hcl';
          break;
    case 'my favourite song':
          SongFileName='stwh'
          SongName='Stairway to heaven'
          break;
    case 'Lose Yourself':
          SongFileName='lyf'
          break;
  }
  song_player(SongName,SongFileName);
}

function stop_playing(){
  //stops playing the song
  $("#song_player").trigger("pause");
  $("#now_playing").slideUp();
}

function clear(){
  //function to clear eveything i.e news, wiki or wolfram answers
  $("#news").hide();
  $("#wiki").hide();
  $("#wolfram").hide();
}

function show(div_id){
  //function to show a particilar div
$("#"+div_id).show();
}

function home(){
  // take the mirror to home screen
  clear();
  $("#news").show();
}
