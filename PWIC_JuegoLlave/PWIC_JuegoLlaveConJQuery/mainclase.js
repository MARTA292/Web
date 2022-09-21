let random = Math.floor(Math.random()*2);
let victorias = 0;
let derrotas = 0; 
$(document).ready(function() 
{
    console.log("el random es: "+random) 

    $("#izquierda").click(function(event)
    {
        if (random === 0)
        {
            $(this).attr("src","imagenes/bola.jpg");
            setTimeout(function()
            {
                r= confirm("victoria, te quedas tu alma");
                victorias +=1;
                if(r===true || r===false)
                    refreshPage();
            },500);        }
        else
        {
            $(this).attr("src","imagenes/abierta.jpg");
            setTimeout(function()
            {
                r= confirm("has perdido, tu alma es mia");
                derrotas += 1;
                if(r===true || r===false)
                    refreshPage();
            },500);        }
    });

    $("#derecha").click(function(event)
    {
        if (random === 1)
        {
            $(this).attr("src","imagenes/bola.jpg");
            setTimeout(function()
            {
                r= confirm("victoria, te quedas tu alma");
                victorias +=1;
                if(r===true || r===false)
                    refreshPage();
            },500);

        }
        else
        {
            $(this).attr("src","imagenes/abierta.jpg");
            setTimeout(function()
            {
                r= confirm("has perdido, tu alma es mia");
                derrotas += 1;
                if(r===true || r===false)
                    refreshPage();
            },500);        }
    });
    console.log("las victorias son: "+victorias)
});

function pista()
{
    //saber donde está
    alert("La bola esta en la "+((random===0)?"Izquierda":"Derecha"));
}

function refreshPage(parametro = false)
{
    if (parametro)
    {
        victorias = 0;
        derrotas = 0;
    }
    $("#victorias").text(victorias);
    $("#derrotas").text(derrotas);
    random = Math.floor(Math.random()*2);
    console.log("el random es: "+random)
    document.querySelectorAll("img").forEach(function (e)
    {
        e.src = "imagenes/cerrada.jpg";
    });
}


