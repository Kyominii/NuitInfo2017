var colorbg = "#CCCCCC";	//couleur de fond
var colorlien = "#000000";	//couleur du texte
var colorsel = "#0000CC";	//couleur selection
var taillebg = 150	//largeur du menu
menutexte = new Array;
menulien = new Array;
menutarget = new Array;
// MENU
menutexte[0]= "Faire boire"
menulien[0]= ""
menutarget[0]="_self"

function position(p)
{
    position_x = (navigator.appName.substring(0,3) == "Net") ? p.pageX : event.x+document.body.scrollLeft;
    position_y = (navigator.appName.substring(0,3) == "Net") ? p.pageY : event.y+document.body.scrollTop;
}
function ouvrir_menu()
{
    document.getElementById("menu_context").style.top = position_y;
    document.getElementById("menu_context").style.left = position_x;
    document.getElementById("menu_context").style.visibility = "visible";
    return(false);
}
function fermer_menu()
{
    if (document.getElementById)
    {
        document.getElementById("menu_context").style.top = 0;
        document.getElementById("menu_context").style.left = 0;
        document.getElementById("menu_context").style.visibility = "hidden";
    }
}
function menu_sel(selec, lienmenu)
{
    if(selec == 1)
    {
        lienmenu.style.background = colorsel;
        lienmenu.style.color = colorbg;
    }
    else
    {
        lienmenu.style.background =colorbg;
        lienmenu.style.color = colorlien;
    }
}
if(navigator.appName.substring(0,3) == "Net")
    document.captureEvents(Event.MOUSEMOVE);