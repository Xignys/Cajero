const cuentas = [
  {
    nombre: "Criss",
    password: "123",
    saldo: 200,
  },
  {
    nombre: "John",
    password: "456",
    saldo: 290,
  },
  {
    nombre: "Gert",
    password: "789",
    saldo: 67,
  },
];

let nombre;

function validacion() {
  let ender = 0;
  let user = document.getElementById("usuario");
  let pass = document.getElementById("password");
  let saldo;

  for (property in cuentas) {
    if (
      user.value == cuentas[property].nombre &&
      pass.value == cuentas[property].password
    ) {
      nombre = user.value;
      ender = 1;
      saldo = cuentas[property].saldo;
      location.href = "cajero.html";
      document.getElementById('saldo').innerText = 'Tu saldo es: ' + saldo;
    }
  }
  if (ender == 1) {
    alert(`Bienvenido ${nombre}`);
  } else {
    alert("Usuario y/o contraseña incorrectos");
  }
}

function consultaSaldo() {
  document.getElementById("saldo").style.display = "block";
  document.getElementById("retiro").style.display = "none";
  document.getElementById("deposito").style.display = "none";
}

function depositoSaldo() {
  document.getElementById("saldo").style.display = "none";
  document.getElementById("retiro").style.display = "none";
  document.getElementById("deposito").style.display = "block";
}
function retiroSaldo() {
  document.getElementById("saldo").style.display = "none";
  document.getElementById("retiro").style.display = "block";
  document.getElementById("deposito").style.display = "none";
}


