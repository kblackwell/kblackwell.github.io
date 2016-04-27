/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    //header animation
    var demos = [];



var collection = {
    one : {
        bg: "../img/blur_edges.png",
        bm: "lighten" 
    },
    two : {
        bg: "../img/website_copy.gif",
        bm: "lighten" 
    },
     
     three : {
        bg: "../img/website_copy.gif",
        //"../IMAGES/bed-of-flowers",
        bm: "multiply"
    }
}
demos.push(collection);


var container = document.getElementById("container");
var active;
var applyDemo = function(number){
    console.log(number);
    var go = demos[number-1];

    container.innerHTML = "";

    var f1 = document.createElement("div");
    f1.setAttribute("id", "f1");
    var style = "background-image: url(" + go.one.bg + "); mix-blend-mode: " + go.one.bm + ";";
    f1.setAttribute("style", style);
    container.appendChild(f1);
    active = number;

    var f2 = document.createElement("div");
    f2.setAttribute("id", "f2");
    var style = "background-image: url(" + go.two.bg + "); mix-blend-mode: " + go.two.bm + ";";
    f2.setAttribute("style", style);
    container.appendChild(f2);

    var f3 = document.createElement("div");
    f3.setAttribute("id", "f3");
    var style = "background-image: url(" + go.three.bg + "); mix-blend-mode: " + go.three.bm + ";";
    f3.setAttribute("style", style);
    container.appendChild(f3);
    active = number;

    document.body.setAttribute("data-demo", number);
}

applyDemo(1);


$('.demos').on('click', 'a', function(event) {
    event.preventDefault();
    var t = this;
        
    if(active == t.getAttribute("data-go")) return;
    
    $(container).fadeOut({
        duration: 1000,
        complete: function(){
            applyDemo(t.getAttribute("data-go"));
            $(container).fadeIn(1000);
        }
    });
});     

})(jQuery); // End of use strict
