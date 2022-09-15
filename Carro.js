class Carro {
    #marca;
    #modelo;

    constructor(Motor, mo, ma) {
        this.motor = Motor;
        this.#marca = ma;
        this.#modelo = mo;
    }

    acelerar() {
        return this.motor.acelerar();
    }
    

//encapsulamento
get modelo () {
    return this.#modelo;
}    
set modelo(modelo) {
    this.#modelo = modelo;
}


get marca() {
    return this.#marca;
}
set marca(marca) {
    this.#marca = marca;
}
}


// Classe Motor
class Motor{
    acelerar() {
         return"";
    }
}
class MotorMonza extends Motor{
    acelerar(){
        return "vrumm..."
    }
}
class MotorGol extends Motor{
    acelerar(){
        return "vrummm..."
    }
}
class MotorSupra extends Motor{
    acelerar(){
        return "vrummmmm..."
    }
}