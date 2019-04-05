

1. Annyang(voice to text service) used in this project only runs on a webserver, so you have to run all this code on a webserver.

2. I haven't added any fallbacks in the code and that is why you should not run it on any funny browsers **cough** internet explorer.
I have used chrome while coding whole project and I advice you to do the same otherwise some browser compatibilities can arise.
If you're a programmer then you can do whatever you like to do, if not then just stick to the chrome.

3. The UI is not fully responsive because at the time of coding I didn't think that I might change the display size sometime in the near future. So you might have to tweak style.css
file to get the interface right(it would be fun I guess).

4. The Wolfram(used to handle intelligent queries) was allowing me to make a request to it's API only through a webserver, that is why I was forced to use php to achieve this task,
there can be many solution to this problem but I found this easiest and workable for me.
so again, if you're a programmer, you can find a fix for this and if not then you neeed to run the codes on a webserver.

5.I don't know why but I feel like I should tell you that the song player only plays the songs that are stored on your computer. Currently it looks for the songs in the audio folder, you can change it as you wish.
I am looking for a good solution to implement online streaming of the songs, so it can play any song that you ask it to do.
Once I find a good solution I'll add it in the mirror.

6. You will need API keys for newsapi and wolfram. So, you have to get it on their websites mentioned below.


Below are the commands that this mirror currently supports

'Wake up' : wakes up the Mirror
'mischief Managed' : turns off the mirror
'play "followed by a song name "': plays the song
'Stop playing': stops playing the song
'clear all': clears all the things from the mirror it'll look like a normal mirror
'show all': undo command for the clear all
'news for me': displays news speicially hand picked for you.
'news from India': displays news from India(because i live here, you might wanna change it to anything you like).
'wiki': searches anything on wiki. for eg 'wiki Microsoft' will search the wiki for Microsoft.
'jarvis': used to handle intelligent queries. for eg 'Jarvis where am i ' gives you the location of the mirror. wisit wolfram alpha website for more information.

Below are the Libraries and APIs used for this project.

Annyang : for voice to text
weatherWidget : https://weatherwidget.io/
Newsapi: https://newsapi.org/
wolfram alpha: https://www.wolframalpha.com/
wiki: https://www.mediawiki.org/wiki/API:Main_page
vannila calender: https://github.com/chrisssycollins/vanilla-calendar

Source: An open source project
