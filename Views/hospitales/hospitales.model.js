class Hospitales_Model {
    constructor(
      id_hospital,
      nombre,
      ciudad,
      numero_camas,
      Ruta
    ) {
      this.id_hospital = id_hospital;
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.numero_camas = numero_camas;
      this.Ruta = Ruta;
    }
  
    todos() {
      var html = "";
      $.get("../../Controllers/hospitales.controller.php?op=" + this.Ruta, (res) => {
        res = JSON.parse(res);
        $.each(res, (index, valor) => {
          html += `<tr>
            <td>${index + 1}</td>
            <td>${valor.nombre}</td>
            <td>${valor.ciudad}</td>
            <td>${valor.numero_camas}</td>
            <td>
              <button class='btn btn-success' onclick='editar(${valor.id_hospital})'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${valor.id_hospital})'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${valor.id_hospital})'>Ver</button>
            </td>
          </tr>`;
        });
        $("#tabla_hospitales").html(html);
      });
    }
  
    insertar() {
      var datos = new FormData();
      datos = this.numero_camas;
  
      $.ajax({
        url: "../../Controllers/hospitales.controller.php?op=insertar",
        type: "POST",
        data: datos,
        contentType: false,
        processData: false,
        success: function (res) {
          res = JSON.parse(res);
          if (res === "ok") {
            Swal.fire("Hospital", "Registrado", "success");
            todos();
          } else {
            Swal.fire("Error", res, "error");
          }
        }
      });
  
      this.limpia_Cajas();
    }
  
    uno() {
      var id_hospital = this.id_hospital;
      $.post(
        "../../Controllers/hospitales.controller.php?op=uno",
        { id_hospital: id_hospital },
        (res) => {
          res = JSON.parse(res);
          $("#id_hospital").val(res.id_hospital);
          $("#nombre").val(res.nombre);
          $("#ciudad").val(res.ciudad);
          $("#numero_camas").val(res.numero_camas);
        }
      );
      $("#Modal_hospitales").modal("show");
    }
  
    editar() {
      var dato = new FormData();
      dato = this.numero_camas;
      $.ajax({
        url: "../../Controllers/hospitales.controller.php?op=actualizar",
        type: "POST",
        data: dato,
        contentType: false,
        processData: false,
        success: function (res) {
          res = JSON.parse(res);
          if (res === "ok") {
            Swal.fire("Hospitales", "Hospital Actualizado", "success");
            todos();
          } else {
            Swal.fire("Error", res, "error");
          }
        }
      });
      this.limpia_Cajas();
    }
  
    eliminar() {
      var id_hospital = this.id_hospital;
  
      Swal.fire({
        title: "Hospitales",
        text: "¿Está seguro de eliminar el hospital?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          $.post(
            "../../Controllers/hospitales.controller.php?op=eliminar",
            { id_hospital: id_hospital },
            (res) => {
              res = JSON.parse(res);
              if (res === "ok") {
                Swal.fire("Hospitales", "Hospital Eliminado", "success");
                todos();
              } else {
                Swal.fire("Error", res, "error");
              }
            }
          );
        }
      });
  
      this.limpia_Cajas();
    }
  
    limpia_Cajas() {
      document.getElementById("nombre").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("numero_camas").value = "";
      $("#Modal_hospitales").modal("hide");
    }
    control_nombre() {
      var nombre = this.nombre;
      $.post(
          "../../Controllers/hospitales.controller.php?op=control_nombre",
          { nombre: nombre },
          (res) => {
              res = JSON.parse(res);
              if (parseInt(res.control_nombre) > 0) {
                  $("#ControlNombre").removeClass("d-none");
                  $("#ControlNombre").html(
                      "El nombre ingresado, ya exite en la base de datos"
                  );
                  $("button").prop("disabled", true);
              } else {
                  $("#ControlNombre").addClass("d-none");
                  $("button").prop("disabled", false);
              }
          }
      );
  }
  }
  