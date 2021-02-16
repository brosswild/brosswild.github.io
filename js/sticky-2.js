$(document).ready(function ()
{
  $(window).scroll(function ()
  {
    //console.log("Çalıştı");

    var uzaklik = $(window).scrollTop();
    //console.log(uzaklik);
    
    if (uzaklik <= 700)
    {
      $("#ust").removeClass("buyuk").addClass("kucuk");
    }

    else
    {
      $("#ust").removeClass("kucuk").addClass("buyuk");
    }
  });
});