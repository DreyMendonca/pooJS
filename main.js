let carro1 = new Carro(new MotorMonza(), "Monza", "Chevrolet");
let carro2 = new Carro(new MotorGol(), "Gol", "Volkswagen");
let carro3 = new Carro(new MotorSupra(), "Supra", "Toyota");

document.write(carro1.marca + " " + carro1.modelo + " " + carro1.acelerar() + "</br>");
document.write(carro2.marca + " " + carro2.modelo + " " + carro2.acelerar() + "</br>");
document.write(carro3.marca + " " + carro3.modelo + " " + carro3.acelerar() + "</br>");
