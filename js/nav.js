//sticky navbar


var $sticky = $(".menu");
$(window).on("scroll", function(){
    var $scrolling = $(this).scrollTop();
    
    if($scrolling > 70){
        $sticky.addClass("navBg");
    }
    else{
        $sticky.removeClass("navBg");
    }
});

/*end of fixed-navbar*/

//sticky navbar