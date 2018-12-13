///Category chooser
//styling
$('.chooser__category').click(function(){
    if (this.classList.contains("chooser__category--selected") === false) {
        $('.chooser__category--selected').removeClass("chooser__category--selected");//removing selection modifier
        $(this).addClass("chooser__category--selected");//adding selection modifier
    }
});
//data refresh
$('.chooser__category').click(function(){
    if ($(this).attr("id") == "fashion") {
        //JSON PARSE
    } else if ($(this).attr("id") == "movies"){
        alert("movies");
    } else if ($(this).attr("id") == "tv") {
        alert("tv");
    }
});
