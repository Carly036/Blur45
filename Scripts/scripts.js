var referencias = "";
var inicio = true;
var verificarNoRepetir = "";
var position = 0;
let parameters = []
const $divElements = document.getElementById("msg")
var msg = document.getElementById("msg");
const agregarLaReferencia = json => {
    parameters.push(json)
    return parameters.length - 1
}

function generarLibros() {
  
  var apellido = document.getElementById("apellidoL").value;
  var ano = document.getElementById("anoL").value;
  var titulo = document.getElementById("tituloL").value;
  var editor = document.getElementById("editorL").value;
  var publicacion = document.getElementById("nombreL").value;
  publicacion.charAt(0).toUpperCase() + publicacion.slice(1);

  var refencia =
    apellido +
    "," +" "+
    publicacion +
    ". (" +
    ano +
    "). " +
    titulo +
    ". " +
    editor + ".";
  if (verificarNoRepetir != refencia) {
    verificarNoRepetir = refencia;
    parameters.push(verificarNoRepetir);
  imprimir();
}
}

function generarArticulo() {
  var nombre = document.getElementById("nombreA").value;
  var apellido = document.getElementById("apellidoA").value;
  var tituloArticulo = document.getElementById("tituloA").value;
  var tituloSitio = document.getElementById("tituloSitioA").value;
  var volumen = document.getElementById("volumenA").value;
  var numero = document.getElementById("numeroA").value;
  var fecha = document.getElementById("fechaA").value;
  var rangoInicial = document.getElementById("rangoIA").value;
  var rangoFinal = document.getElementById("rangoTA").value;
  position=position+1;
  var refencia =
    apellido +
    " " +
    nombre +
    ", " +
    tituloArticulo +
    ", " +
    tituloSitio +
    ", " +
    volumen +
    "." +
    numero +
    ", " +
    fecha +
    ", " +
    rangoInicial +
    " - " +
    rangoFinal;
    if (verificarNoRepetir != refencia) {
        verificarNoRepetir = refencia;
        parameters.push(verificarNoRepetir);
  imprimir();
      }
}

function generarSitioWeb() {
  var nombre = document.getElementById("nombreI").value;
  var apellido = document.getElementById("apellidoI").value;
  var anoI = document.getElementById("anoI").value;
  var tituloArticuloI = document.getElementById("tituloArticuloI").value;
  var fechaI = document.getElementById("fechaI").value;
  var nombrePi = document.getElementById("nombrePi").value;
  var url = document.getElementById("url").value;
  var refencia =
    apellido +
    " " +
    nombre +
    ", (" +
    anoI +
    "), " +
    tituloArticuloI +
    ", " +
    nombrePi +
    ", recuérado el " +
    fechaI +
    " en: " +
    url;
    if (verificarNoRepetir != refencia) {
        verificarNoRepetir = refencia;
        parameters.push(verificarNoRepetir);
            imprimir();
      }
}

function aparecer(opcion) {
  var libros = document.getElementById("libros");
  var articulos = document.getElementById("articulos");
  var sitio = document.getElementById("sitio");
  var videos = document.getElementById("videos");

  if (opcion == 1) {
    libros.hidden = false;
    articulos.hidden = true;
    sitio.hidden = true;
    videos.hidden = true;
  }

  if (opcion == 2) {
    libros.hidden = true;
    articulos.hidden = false;
    sitio.hidden = true;
    videos.hidden = true;
  }

  if (opcion == 3) {
    libros.hidden = true;
    articulos.hidden = true;
    sitio.hidden = false;
    videos.hidden = true;
  }

  if (opcion == 4) {
    libros.hidden = true;
    articulos.hidden = true;
    sitio.hidden = true;
    videos.hidden = false;
  }
}



function imprimir() {
  var final="";
  parameters.forEach(function(elemento, indice, parameters) {
    final = final+"Referencia: "+(indice+1) + ". "+elemento+"\n"+"\n"})
    console.log(final)
    document.getElementById("msg").value=final;

    limpiar();
}


function limpiar(){
  document.getElementById("nombreI").value = "";
  document.getElementById("apellidoI").value = "";
  document.getElementById("anoI").value = "";
  document.getElementById("tituloArticuloI").value = "";
  document.getElementById("fechaI").value = "";
  document.getElementById("nombrePi").value = "";
  document.getElementById("url").value = "";
  document.getElementById("nombreA").value = "";
  document.getElementById("apellidoA").value = "";
  document.getElementById("tituloA").value = "";
  document.getElementById("tituloSitioA").value = "";
  document.getElementById("volumenA").value = "";
  document.getElementById("numeroA").value = "";
  document.getElementById("fechaA").value = "";
  document.getElementById("rangoIA").value = "";
  document.getElementById("rangoTA").value = "";
  document.getElementById("nombreL").value = "";
  document.getElementById("apellidoL").value = "";
  document.getElementById("anoL").value = "";
  document.getElementById("tituloL").value = "";
  document.getElementById("editorL").value = "";
  document.getElementById("lugarL").value = "";

  verificarSihayRegistros()
}

function verificarSihayRegistros(){
    if(parameters.length>0){
        document.getElementById("ref").hidden=false;
    }else{
        document.getElementById("ref").hidden=true;
    }
}

function limpiartodo(){
    parameters = []
    document.getElementById("msg").value="";
    verificarNoRepetir=""
    verificarSihayRegistros()
}

function eliminar(){
    var valor = document.getElementById("referencia").value;
    parameters.splice(valor-1, 1)
    valor = document.getElementById("referencia").value = "";
    if(parameters.length>0){
        document.getElementById("ref").hidden=false;
    imprimir()
    }else{
        document.getElementById("ref").hidden=true;
        limpiartodo();
    }
}