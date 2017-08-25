/*
 * Archivo principal de funcionalidad de JS
 */
var body = document.body;
var figura = document.getElementById('boxxx-services');
var contenido = document.getElementById('container');
var seccc = document.getElementById('work');
var cont = 1;
var num = 1;

function agregaImagen (picture){  
    picture = ['assets/images/img-1.jpg','assets/images/img-2.jpg','assets/images/img-3.jpg','assets/images/img-4.jpg','assets/images/img-5.jpg','assets/images/img-6.jpg','assets/images/img-7.jpg','assets/images/img-8.jpg','assets/images/img-9.jpg'];
    for(var i = 0; i<picture.length; i++){
        var divim = document.createElement('div');
        divim.setAttribute('class','box');
        divim.setAttribute('id',cont++);
        divim.setAttribute('onclick','prueba(this)');
       
        var imasov = document.createElement('img');
        imasov.setAttribute('src',picture[i]);
        imasov.setAttribute('id','foto'+num++);
        imasov.setAttribute('class','zoom');
        imasov.setAttribute('width','300');
        
        var conText = document.createElement('h5');
        conText.innerHTML = 'NOMBRE DEL PROYECTO';
        
        divim.appendChild(imasov);
        divim.appendChild(conText);
        figura.appendChild(divim);;
        contenido.appendChild(figura);
        seccc.appendChild(contenido);
    }
    
}

agregaImagen();


var logge = 1;
var love = 1;
function prueba (e){
    var edpp = e.id;
    
    var divmax = document.createElement('div');
    divmax.setAttribute('class','bigbox');
    
    /*var inpu = document.createElement("input");
    inpu.setAttribute('type','button');
    inpu.setAttribute('value','>');
    inpu.setAttribute('id','mi'+logge++);
    inpu.setAttribute('onclick','inputt(this)');*/

    var closeX = document.createElement("div");
    closeX.setAttribute('class','delete');
    closeX.innerHTML = "X";
    
    var spanX = document.createElement("span");
    spanX.setAttribute('class','tooltiptext');
    spanX.innerHTML = "Cerrar";
    
    var creaIma = document.createElement('img');
    creaIma.setAttribute('src','assets/images/'+'img-'+e.id+'.jpg');
    creaIma.setAttribute('class','row');
    creaIma.setAttribute('id','git-'+love);
    
    closeX.appendChild(spanX);
    divmax.appendChild(creaIma);  
    //divmax.appendChild(inpu); 
    divmax.appendChild(closeX);; 
    body.appendChild(divmax);
    
    
    divmax.addEventListener("click", function(event){
        if (event.target && event.target.className == "delete") {
            event.target.parentNode.remove();
        }
    });


}






