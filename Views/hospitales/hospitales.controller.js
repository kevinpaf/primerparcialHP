// Archivo de controlador de hospitales
function init_hospitales() {
    $("#form_hospitales").on("submit", function (e) {
      guardar_hospital(e);
    });
  
    // Otras inicializaciones si es necesario
  }
  
  $().ready(() => {
    // Detecta carga de la página
    todos();
  });
  
  var todos = () => {
    var todasHospitales = new Hospitales_Model("", "", "", "", "todos");
    todasHospitales.todos();
  };
  
  var guardar_hospital = (e) => {
    e.preventDefault();
    var formData = new FormData($("#form_hospitales")[0]);
    var id_hospital = document.getElementById("id_hospital").value;
  
    if (id_hospital > 0) {
      var hospitales = new Hospitales_Model("", "", "", formData, "editar");
      hospitales.editar();
    } else {
      var hospitales = new Hospitales_Model("", "", "", formData, "insertar");
      hospitales.insertar();
    }
  };
  
  var editar = (id_hospital) => {
    var uno= new Hospitales_Model(id_hospital, "", "", "", "uno");
    uno.uno();
  };
  var control_nombre = () => {
    var nombre = $("#nombre").val();
    var hospitales = new Hospitales_Model("", nombre, "", "", "control_nombre");
    hospitales.control_nombre();
};
  
  var eliminar = (id_hospital) => {
    var eliminar = new Hospitales_Model(id_hospital, "", "", "", "eliminar");
    eliminar.eliminar();
  };
  
  init_hospitales();
  