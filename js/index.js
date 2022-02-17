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
document.getElementById("saldo").innerText = "Tu saldo es de $" + localStorage.getItem("saldoInicial");

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



