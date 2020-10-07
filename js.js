setInterval(OraKiir,1);
function OraKiir()
{
    var ido=new Date();
    var ora=ido.getHours();
    if (ora<10)
        ora="0"+ora;
    var perc=ido.getMinutes();
    if (perc<10)
        perc="0"+perc;
    var mp=ido.getSeconds();
    if (mp<10)
        mp="0"+mp;
    if (mp%2==0)
        {
            document.getElementById("ora").style.color="red";
            document.getElementById("ora").style.fontsize="54px";
        }
        else
        {
            document.getElementById("ora").style.color="yellow";
            document.getElementById("ora").style.fontsize="54px";
        }
    var idoszoveg=ora+":"+perc+":"+mp;
    document.getElementById("ora").innerHTML=idoszoveg;
}

function Szamol()
{
    var arfolyam=360;
    var ertek=document.getElementById("ertek").value;
    var valaszt=document.getElementById("valaszt")
    .selectedIndex;
    if (valaszt==0)
        {
            var uj=ertek/arfolyam;
            document.getElementById("eredmeny").innerHTML=uj+"EUR";
        }
    else
        {
            var uj=ertek*arfolyam;
            document.getElementById("eredmeny").innerHTML=uj+"HUF";
        }
}
