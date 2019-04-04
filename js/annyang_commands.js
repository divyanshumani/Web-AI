// Annyang code starts here.
if (annyang) {
  // Let's define our commands. First the text we expect, and then the function it should call
 var commands = {
   'wake up': function(){
       magic_chime();
       wake();
   },
    'mischief managed': function(){
      magic_chime();
      mischief_managed();
    },
    'stop playing':function(){
      stop_playing();
    },
    'clear all':function(){
      clear_all();
    },
    'show all':function(){
      show_all();
    },
    'news from india': function(){
      news_fetch('india');
    },
    'news for me': function(){
      news_fetch('favourite');
    },
    'play *tag': play_song,
    'wiki *tag': wiki_fetch,
    'jarvis *tag': wolfram_fetch
  };
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Annyang Starts listening.
  annyang.start();
}
