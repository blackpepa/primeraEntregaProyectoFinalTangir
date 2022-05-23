
class sugerencias {

    constructor (lugar,tipo,servicio,porcentaje){

        this.lugar = lugar;
        this.tipo = tipo;
        this.servicio = servicio;
        this.porcentaje = porcentaje;

    } 
    mostrar_listado(){
        return ("Nombre:" + this.lugar + " - Tipo:" + this.tipo + " - Servicio:" + this.servicio + " Porcentaje sugerido de propina:" + this.porcentaje + "%");
    }
    
}

let tipA= new sugerencias ("Los Orientales","restaurante", 3 , 10);
let tipB= new sugerencias ("Café Margot","restaurante", 1 , 5);
let tipC = new sugerencias("Pantaleón","restaurante", 5 , 15);
let tipD = new sugerencias("Casa Mhia", "delivery", 4 , 8);
let tipE = new sugerencias("Vip´s","peluqueria", 5 , 10);
