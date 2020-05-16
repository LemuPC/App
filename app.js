var formulario = document.getElementById('Form');
var ContenedorDeTareas = document.getElementById('Contenedor-Tareas');
var contador = 0;

formulario.addEventListener('submit', function(){
    var Input = document.getElementById('Input').value;
    if(Input.trim.length >= 1 || Input.trim.length <= 30 && Input !== localStorage[i]){

        localStorage.setItem(Input, Input);
    }
    else if(Input.trim.length >= 31){
       alert("Son demasiados caracteres para agregar")
    }
    else if(Input !== localStorage[i]){
        alert("Ya añadiste esta Tarea")
    }
    else{
        alert("no has escrito nada en el formulario")
    }

});

for(var i in localStorage){
    if(typeof localStorage[i] == "string" ){
        var Tareas = document.createElement('div');
        
        
        var Check = document.createElement('input')
        Check.type ="checkbox";
        Check.style.height = "20px";
        Check.style.marginTop = "20px";

        
        contador++;
        Tareas.append(localStorage[i]);


        Tareas.style.fontSize ="20px";
        Tareas.style.color = "#fff";
        Tareas.style.width = "80%";
        Tareas.style.marginTop = "20px";

        ContenedorDeTareas.append(Tareas, Check);
        ContenedorDeTareas.style.padding = "20px"; 
        ContenedorDeTareas.style.display = "flex"
        ContenedorDeTareas.style.flexWrap = "wrap";      
    }
}


