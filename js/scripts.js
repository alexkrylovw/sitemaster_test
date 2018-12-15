///CATEGORY CHOOSER
//STYLING
$('.chooser__category').click(function(){
    if (this.classList.contains("chooser__category--selected") === false) {
        $('.chooser__category--selected').removeClass("chooser__category--selected");//removing selection modifier
        $(this).addClass("chooser__category--selected");//adding selection modifier
    }
});
//DATA REFRESHER
$('.chooser__category').click(function(){
    if ($(this).attr("id") == "fashion") {
        $.getJSON("../json_data/data_fashion.json",
            function (data) {
                var obj = JSON.parse(JSON.stringify(data));
                //First ele
                $("#content_1>a>img").attr("src", obj["img_src"]);
                $("#content_1>div>a>h2").text(obj["h2"]);
                $("#content_1>div>p").text(obj["p"]);
                //Second ele
                $("#content_2>a>img").attr("src", obj["img_src"]);
                $("#content_2>div>a>h2").text(obj["h2"]);
                $("#content_2>div>p").text(obj["p"]);
                //Third ele
                $("#content_3>a>img").attr("src", obj["img_src"]);
                $("#content_3>div>a>h2").text(obj["h2"]);
                $("#content_3>div>p").text(obj["p"]);
            }
        );
    } else if ($(this).attr("id") == "movies"){
        $.getJSON("../json_data/data_movies.json",
            function (data) {
                var obj = JSON.parse(JSON.stringify(data));
                //First ele
                $("#content_1>a>img").attr("src", obj["img_src"]);
                $("#content_1>div>a>h2").text(obj["h2"]);
                $("#content_1>div>p").text(obj["p"]);
                //Second ele
                $("#content_2>a>img").attr("src", obj["img_src"]);
                $("#content_2>div>a>h2").text(obj["h2"]);
                $("#content_2>div>p").text(obj["p"]);
                //Third ele
                $("#content_3>a>img").attr("src", obj["img_src"]);
                $("#content_3>div>a>h2").text(obj["h2"]);
                $("#content_3>div>p").text(obj["p"]);
            }
        );
    } else if ($(this).attr("id") == "tv") {
        $.getJSON("../json_data/data_TV.json",
            function (data) {
                var obj = JSON.parse(JSON.stringify(data));
                //First ele
                $("#content_1>a>img").attr("src", obj["img_src"]);
                $("#content_1>div>a>h2").text(obj["h2"]);
                $("#content_1>div>p").text(obj["p"]);
                //Second ele
                $("#content_2>a>img").attr("src", obj["img_src"]);
                $("#content_2>div>a>h2").text(obj["h2"]);
                $("#content_2>div>p").text(obj["p"]);
                //Third ele
                $("#content_3>a>img").attr("src", obj["img_src"]);
                $("#content_3>div>a>h2").text(obj["h2"]);
                $("#content_3>div>p").text(obj["p"]);
            }
        );
    }
});



/////////////
/////////////
/////////////


///IMAGE PICKER
$(".article__picturesblock--mini>div>img").click(function (){
    var pickedElement = $(this).attr("src");
    var pickedElementDescription = $(this).attr("alt");
    pickedElementNumber = pickedElement.match(/\d+/g); //Regular expression for extracting "first group of numbers"
    $(".article__picturesblock--choosen>img").attr("src", "img/screenshots/full/full_" + pickedElementNumber + ".png");
    $(".article__picturesblock--choosen>img").attr("alt", pickedElementDescription);
});


/////////////
/////////////
/////////////


///RESPONSIVE MENU

$("#nav-burger-button").click(function() {
    $("#nav-burger-button").toggleClass("active");
    $(".header__secondline").slideToggle();
    if ($("#nav-burger-button").hasClass("active")) {
        $(".header__secondline").css("display","flex");
    }
});
    