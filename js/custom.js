jQuery(document).ready(function($) {

    var count = 1,
        Picindex;
    $('#products a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
        var key = e.currentTarget.dataset.value;
        // fetch';
        var data = fetch('./products.json').then(function(response) {
            // Convert to JSON
            return response.json().then(function(text) {
                    return text;
                }).then(function(data) {
                    var productList = "";
                    for (var i in data[key]) {
                        productList += '<div class="product-block">' +
                            '<img src="' + data[key][i].img + '" alt="">' +
                            '<h4>' + data[key][i].name + '</h4>'  + 
                            '<h5>' + data[key][i].price + '</h5>'+ '</div>' ;
                    }
                    $("#" + key).html(productList)
                })
                // loop over data with active value
        });
    });
    $('#products a')[0].click()
 $(".smallnav").click(function(){

 
        $("#mySidenav").css('width','70%');
        // document.getElementById("flipkart-navbar").style.width = "50%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

     $(".closebtn").click(function(){
        $("#mySidenav").css('width','0');
        $("body").css('background-color','rgba(0,0,0,0)');
     });

     $("#mySidenav a").click(function(){
        $("#mySidenav").css('width','0');
        $("body").css('background-color','rgba(0,0,0,0)');
     });
    $('#scroller').imageScroll();
    $('#scroller').imageScroll({

        // top,right,bottom,left optional
        orientation: "left",

        // animation speed
        speed: 600,

        // animation interval
        interval: 1500,

        // pause on hover
        hoverPause: true,

        // callback function after every scroll motion

        callback: function() {
            return false;
        }



    });



    Picindex = setInterval(function(){
        if (count == 7)
            clearInterval(Picindex)
        $('.replaceimg').attr("src", "images/" + count + ".jpg");
        count++;
    }, 1500);
});