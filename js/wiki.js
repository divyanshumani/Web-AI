function wiki_fetch(input){
        $("#wiki_title").text('');
        $("#wiki_detail").text('');
        clear();
        show("wiki");

        var wikiapi = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json&callback=?";

        $.getJSON(wikiapi, wikicallback);

        function wikicallback(wiki_result){

            console.log(wiki_result);

            //add wiki answer to HTML
            wiki_title=wiki_result[1][0];
            wiki_detail=wiki_result[2][0];
            var wiki_title_id=document.getElementById('wiki_title');
            var wiki_detail_id=document.getElementById('wiki_detail');
            wiki_title_id.innerHTML=wiki_title;
            wiki_detail_id.innerHTML=wiki_detail;
        }

magic_chime(); //plays magic chime sound when script runs successfully
        //clears the answer after an interval of 60 seconnds
      var timeout=  setTimeout(function(){
          home();
        }, 15000);
}
