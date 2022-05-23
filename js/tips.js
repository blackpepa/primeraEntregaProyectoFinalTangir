let arregloTip= [tipA, tipB, tipC, tipD, tipE]

let tipTip = true;

while(tipTip){
    let mensaje = "Aquí encontrarás todo sobre propininas, indica la opción deseada";
    mensaje += "\n1) Calculadora de propina";
    mensaje += "\n2) Listado de propinas sugeridas por lugar, tipo y calidad del servicio";
    mensaje += "\n3) Sugerir un nuevo lugar y propina";
    mensaje += "\n4) Salir del simulador";

    let resp = prompt(mensaje);
    switch (resp) {

        case "1":
            calculadora();
            break;
        case "2":
            propinasSugeridas();
            break;
        case "3":
            ingresarNuevaSugerencia();
            break;
        case "4":
            alert("Gracias, vuelva prontos");
            tipTip = false;
            break;
        case null:
            alert("Gracias, vuelva prontos");
            tipTip = false;
            break;
        default:
            alert("No ingreso una opcion valida");

    }
}

function calculadora(){
let tipInit = confirm ("Bienvenido a la calculadora de propinas.")

while (tipInit){
    let monto = parseInt(prompt("¿Cuánto gastaste?"));
    let tip = parseInt(prompt("¿Qué porcentaje querés dejar de propina?"));
    let resultado = alert("Debés dejar $ " + tipFinal(monto, tip));
    tipInit = confirm("¿Deseás consultar nuevamente?");
    if(tipInit = false){
        tipTip;
    }
}

function tipFinal(monto, tip){
    return  monto * tip /100
}
}


function datosSugerirPropina() {
    let newTip = true;

    while (newTip) {
        let txt = "";
        let lugar = prompt("Ingrese el nombre del lugar que quiere reseñar");
        let tipo = prompt("Ingrese el tipo de comercio o servicio. Ejemplos: Restaurante, delivery, etc.")
        let servicio = parseInt(prompt("Ingresar un número del 1 al 5, siendo 1 malo y 5 genial."));
        let porcentaje = parseInt(prompt("Ingrese porcentaje sugerido"));

        if (!lugar) {

            txt += "\nDebe ingresar un lugar";

        }
        if (!tipo){
            txt += "\nDebe ingresar un tipo";

        }
        if (!servicio<5 && !servicio >=1) {

            txt += "\nDebe ingresar un número del 1 al 5";
        }

        if (isNaN(porcentaje)) {

            txt += "\nDebe ingresar un número para reflejar el porcentaje";

        }

        if (txt != "") {

            alert(txt);
            newTip = confirm("Desea cargar de nuevo los datos");


        } else {

            return new sugerencias(lugar, tipo, servicio, porcentaje);

        }

    }

    return false;

}

function ingresarNuevaSugerencia() {
    sugerencias = datosSugerirPropina();

    if (sugerencias) {
        arregloTip.push(sugerencias);
        alert("Sugerencia agregada")

    }

}


function propinasSugeridas(){
        let mensaje = "El listado de propinas sugeridas según la calidad del servicio y el lugar es: "
        arregloTip.forEach((sugerencias) => {
        mensaje += "\n " + sugerencias.mostrar_listado();
        })

        alert(mensaje);

}
