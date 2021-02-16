var menu = document.getElementById("menu");
var Logo = document.getElementById("logo");

function change()
{
    if(scrollY >= 700)
    {
        menu.classList.add("Menu-2");
        Logo.classList.add("Logo-2");
    }

    else
    {
        menu.classList.remove("Menu-2");
        Logo.classList.remove("Logo-2");
    }
}