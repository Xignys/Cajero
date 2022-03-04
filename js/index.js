const cuentas = [
  {
    nombre: "Mali",
    password: "helloworld",
    saldo: 200,
  },
  {
    nombre: "Gera",
    password: "l33t",
    saldo: 300,
  },
  {
    nombre: "Maui",
    password: "123",
    saldo: 400,
  },
];

let nombre;
let user = document.getElementById("usuario");
let pass = document.getElementById("password");

function validacion() {
  let ender = 0;

  for (prop in cuentas) {
    if (
      user.value == cuentas[prop].nombre &&
      pass.value == cuentas[prop].password
    ) {
      nombre = user.value;
      saldoinicial = cuentas[prop].saldo;
      ender = 1;
    }
  }
  if (ender == 1) {
    alert(`Bienvenido ${nombre}`);
    localStorage.setItem("usuario", nombre);
    localStorage.setItem("saldoInicial", saldoinicial);
    location.href = "cajero.html";
  } else {
    alert("Usuario y/o contraseña incorrectos");
  }
}

//Siguiente página
document.getElementById("bienvenida").innerText = "Bienvenido " + localStorage.getItem("usuario"); //Muestra Bienvendia mas el nombre 
document.getElementById("saldoShow").innerText = "Tu saldo es de $" + localStorage.getItem("saldoInicial"); //Muestra el saldo inicial


// Oculta resultados de botones 
function consultaSaldo() {  
  document.getElementById("saldoShow").style.display = "block";
  document.getElementById("retiroShow").style.display = "none";
  document.getElementById("depositoShow").style.display = "none";
}
function depositoSaldo() {
  document.getElementById("saldoShow").style.display = "none";
  document.getElementById("retiroShow").style.display = "none";
  document.getElementById("depositoShow").style.display = "block";
}
function retiroSaldo() {
  document.getElementById("saldoShow").style.display = "none";
  document.getElementById("retiroShow").style.display = "block";
  document.getElementById("depositoShow").style.display = "none";
}

let valorSaldo = Number (localStorage.getItem("saldoInicial"));  // Guarda el valor del saldo total de la cuenta  / al principio solo guarda el valor inicial del arreglo


function deposito(){
  cantidad = Number (document.getElementById("depoSaldo").value); //obtiene el valor escrito 
  saldoMod = valorSaldo + cantidad;  //suma el valor escrito con el valor del saldo total


  if(cantidad <= 0){
    alert("Introduzca un valor correcto");
  }
  else if(saldoMod > 990 ){
    alert("Su cuenta no puede tener mas de $990");
  }
  else{
    localStorage.setItem("saldoInicial", saldoMod);
    valorSaldo = Number (localStorage.getItem("saldoInicial"));
    document.getElementById("nuevosaldo").innerText = "Tu nuevo saldo es de $" + localStorage.getItem("saldoInicial");   //Muestra el saldo  
    document.getElementById("nuevosaldo2").innerText = "Tu nuevo saldo es de $" + localStorage.getItem("saldoInicial");  //Muestra el saldo 
    document.getElementById("saldoShow").innerText = "Tu saldo es de $" + localStorage.getItem("saldoInicial"); //Muestra el saldo
  }

}

function retiro(){
  cantidad = Number (document.getElementById("retiSaldo").value);
  saldoMod = valorSaldo - cantidad; 

  if(cantidad <= 0){
    alert("Introduzca un valor correcto");
  }
  else if(saldoMod < 10 ){
    alert("Su cuenta no puede tener menos de $10");
  }
  else{

    localStorage.setItem("saldoInicial", saldoMod);
    valorSaldo = Number(localStorage.getItem("saldoInicial"));
    document.getElementById("nuevosaldo").innerText = "Tu nuevo saldo es de $" + localStorage.getItem("saldoInicial");
    document.getElementById("nuevosaldo2").innerText = "Tu nuevo saldo es de $" + localStorage.getItem("saldoInicial");
    document.getElementById("saldoShow").innerText = "Tu saldo es de de $" + localStorage.getItem("saldoInicial");
  }

}


