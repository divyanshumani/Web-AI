function song_player(SongName,SongFileName){
  //SongName consists the name of the song user asked to play
  //SongFileName consists the name of the file of the song stored on your storage.

  var song_location='audio/'+SongFileName+'.mp3';
  //song_location consists the location where the song(mp3 file) is stored.
  var audio=$("#song_player");
  $("#song_name").attr("src", song_location);
  audio[0].pause();
  audio[0].load();//suspends and restores all audio element
  audio[0].play();
  $("#now_playing").text("Now Playing : " + SongName);
  $("#now_playing").slideDown();
};
