$(document).ready(function () 
{
    $(window).scroll(function () 
    { 
        //console.log("Çalıştı....");

        var mesafe = $(window).scrollTop();
        //console.log(mesafe);

        if(mesafe > 300)
        {
            //console.log(mesafe);
            //console.log("Nerye kardes");
        $(".page-top").fadeIn();
        }
        else
        {
        $(".page-top").fadeOut();
        }
    });


       $("#home-1, .page-top").click(function (e)
        {
            $("html,body").animate({scrollTop:0},0);
        
        
        
            e.preventDefault();
       });
});