var menu = document.getElementById("menu");
var menuBars = document.getElementById("menuAc");
var li = document.querySelectorAll('Menu ul li');
var home = document.getElementById("home-1");
var about = document.getElementById("about-1");
var art = document.getElementById("artists-1");
var refer = document.getElementById("references-1");
var pageTOP = document.getElementById("page-top");

function openMenu()
{
    if(menuBars.onclick)
    {
        menu.classList.toggle('Menu-active');
        menuBars.classList.toggle('close');
    }

    else
    {
        menu.classList.slideToggle('Menu-deactive');
        menuBars.classList.remove('close');
    }
}

function closeMenu()
{
    if(li.onclick)
    {
        menu.classList.toggle('Menu-deactive');
        menuBars.classList.add('close');
    }

    else
    {
        menu.classList.toggle('Menu-active');
        menuBars.classList.remove('close');
    }
}

function homer()
{
    if(home.onclick)
    {
        home.style.borderBottom = "3px solid";
        home.style.borderBottomColor = "#ffffff";
        refer.style.border = "none";
        art.style.border = "none";
        about.style.border = "none";
    }

    else
    {
        home.style.borderBottom = "none";
    }
}

function abo()
{
    if(about.onclick)
    {
        about.style.borderBottom = "3px solid";
        about.style.borderBottomColor = "#ffffff";
        home.style.border = "none";
        art.style.border = "none";
        refer.style.border = "none";
    }

    else
    {
        about.style.borderBottom = "none";
    }
}

function arts()
{
    if(art.onclick)
    {
        art.style.borderBottom = "3px solid";
        art.style.borderBottomColor = "#ffffff";
        about.style.border = "none";
        home.style.border = "none";
        refer.style.border = "none";
    }

    else
    {
        art.style.borderBottom = "none";
    }
}

function ref()
{
    if(refer.onclick)
    {
        refer.style.borderBottom = "3px solid";
        refer.style.borderBottomColor = "#ffffff";
        art.style.border = "none";
        about.style.border = "none";
        home.style.border = "none";
    }

    else
    {
        refer.style.borderBottom = "none";
    }
}

function pageClose()
{
    if(pageTOP.onclick)
    {
        home.style.borderBottom = "3px solid";
        home.style.borderBottomColor = "#ffffff";
        home.style.transition = "none";
        about.style.border = "none";
        art.style.border = "none";
        refer.style.border = "none";
    }
}

function closeMenuTop()
{
    if(pageTOP.onclick)
    {
        menu.classList.slideToggle('Menu-deactive');
        menuBars.classList.remove('close');
    }
}