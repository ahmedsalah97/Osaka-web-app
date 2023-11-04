
let offsetScroll1 =$('#about').offset().top

$(window).scroll(function(){
    if($(window).scrollTop()>offsetScroll1){
        $("nav").css('backgroundColor' , '#dc3545')
        $("#btnupp").show(500)
    }else{
        $("nav").css('backgroundColor' , 'transparent')
        $("#btnupp").hide(500)
    }
    
})



$("#btnupp").click(function () {
    $("html,body").animate({scrollTop:0} , 500)
})


// loadiiing
$(document).ready(function () {
    $(".loader").fadeOut(1000 , function () {
        $("#loading").fadeOut(1000, function () {
             $('body').css('overflow' , 'auto')
        })
       
    })
    
})


