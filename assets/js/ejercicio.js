// 1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por
// cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
// información que contengan los listados, considerando las propiedades establecidas
// en la descripción.
let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: 9878782.1,
    prevision: "FONASA",
  },

  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: 15345241.3,
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: 16445345.9,
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: 17666419.0,
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },

  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "	DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

let odontologia = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "	11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "	HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
// nombre del paciente junto con la previsión, separados por un guión (utilizar índices
// de arreglos para esto).
// Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.

let radiolog = `<h3>Primera atención</h3> <h5>${radiologia[0].paciente} - ${radiologia[0].prevision}</h5> | <h3>Última atención</h3><h5>${radiologia[radiologia.length - 1].paciente} - ${
  radiologia[radiologia.length - 1].prevision
}</h5><br>`;

document.getElementById("atencionRadiologia").innerHTML = radiolog;

let traumat = `<h3>Primera atención</h3> <h5>${traumatologia[0].paciente} - ${traumatologia[0].prevision}</h5> | <h3>Última atención</h3><h5>${traumatologia[traumatologia.length - 1].paciente} - ${
  traumatologia[traumatologia.length - 1].prevision
}</h5><br>`;

document.getElementById("atencionTraumatologia").innerHTML = traumat;

let odontolog = `<h3>Primera atención</h3><h5>${odontologia[0].paciente} - ${odontologia[0].prevision}</h5> | <h3>Última atención</h3><h5>${odontologia[odontologia.length - 1].paciente} - ${
  odontologia[odontologia.length - 1].prevision
}</h5><br>`;

document.getElementById("atencionOdontologia").innerHTML = odontolog;

// 3. Recorrer el arreglo y mostrar su contenido en una tabla.

var texto1 = "<tbody></tobody>";
for (var i = 0; i < radiologia.length; i++) {
  texto1 += `<tr>
<td>${radiologia[i].hora}</td>
<td>${radiologia[i].especialista}</td>
<td>${radiologia[i].paciente}</td>
<td>${radiologia[i].rut}</td>
<td>${radiologia[i].prevision}</td>
</tr>`;
}
document.getElementById("cuerpo-tabla1").innerHTML = texto1;

var texto2 = "<tbody></tobody>";
for (var i = 0; i < traumatologia.length; i++) {
  texto2 += `<tr>
<td>${traumatologia[i].hora}</td>
<td>${traumatologia[i].especialista}</td>
<td>${traumatologia[i].paciente}</td>
<td>${traumatologia[i].rut}</td>
<td>${traumatologia[i].prevision}</td>
</tr>`;
}
document.getElementById("cuerpo-tabla2").innerHTML = texto2;

var texto3 = "<tbody></tobody>";
for (var i = 0; i < odontologia.length; i++) {
  texto3 += `<tr>
<td> ${odontologia[i].hora}</td>
<td> ${odontologia[i].especialista} </td>
<td> ${odontologia[i].paciente} </td>
<td> ${odontologia[i].rut} </td>
<td> ${odontologia[i].prevision} </td>
</tr>`;
}
document.getElementById("cuerpo-tabla3").innerHTML = texto3;
