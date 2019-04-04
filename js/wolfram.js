
function wolfram_fetch(input){
        $("#wolfram_question").text('');
        $("#wolfram_answer").text('');
        clear();
        show("wolfram");
        // making an ajax call to wolfram_process.php
        $.ajax({
          type:"GET",
          url:"php/wolfram_process.php",
          data:{question:input},
          success:function(text){
            magic_chime();
            $("#wolfram_question").append("Q : "+input);
            $("#wolfram_answer").append("A : "+text);
          }
        });
          // makes the answer dissapears after 15 seconds
        var timeout=  setTimeout(function(){
            home();
          }, 15000);
}
