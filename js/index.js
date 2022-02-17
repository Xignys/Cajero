const cuentas = [
  {
    nombre: "Criss",
    password: "123",
    saldo: 200,
  },
  {
    nombre: "John",
    password: "456",
    saldo: 300,
  },
  {
    nombre: "Gert",
    password: "789",
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
document.getElementById("bienvenida").innerText = "Bienvenido " + localStorage.getItem("usuario");
document.getElementById("saldoShow").innerText = "Tu saldo es de $" + localStorage.getItem("saldoInicial");

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

let valorSaldo = Number (localStorage.getItem("saldoInicial"));


function deposito(){
  cantidad = Number (document.getElementById("depoSaldo").value);
  saldoMod = valorSaldo + cantidad;

  if(cantidad <= 0){
    alert("Introduzca un valor correcto");
  }
  else if(saldoMod > 990 ){
    alert("Su cuenta no puede tener mas de $990");
  }
  else{
    document.getElementById("nuevosaldo").innerText = "Tu nuevo saldo es $" + saldoMod;
    document.getElementById("saldoShow").innerText = "Tu saldo es de $" + saldoMod;
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
    document.getElementById("nuevosaldo2").innerText = "Tu nuevo saldo es $" + saldoMod;
    document.getElementById("saldoShow2").innerText = "Tu saldo es de $" + saldoMod;
  }

}


