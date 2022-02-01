var turno=1;
var controllo=[];


function cella(pos)
{
    if (turno%2==0) 
    {
        document.getElementById(pos).innerHTML="<img src='./images/cerchio.png' class=croce>"
        controllo[turno-1]=2;
        turno++;
    }
    else
    {
        document.getElementById(pos).innerHTML="<img src='./images/croce.png' class=croce>"
        controllo[turno-1]=1;
        turno++;
    }



    if (turno>=5)
    {
        if (controllo[0]==controllo[2] && controllo[2]==controllo[4]) 
        {
           window.alert("ha vinto il giocatore 1");
     }
    }
}