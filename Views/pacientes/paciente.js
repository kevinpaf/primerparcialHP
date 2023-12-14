function init() {
    $("#frm_pacientes").on("submit", function (e) {
        guardaryeditar(e);
    });
}
 
$().ready(() => {
    todos();
});
 
var todos = () => {
    var html = "";
    $.get("../../Controllers/pacientes.controller.php?op=todos", (res) => {
        res = JSON.parse(res);
        $.each(res, (index, valor) => {
            html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.hospitales}</td>
                  <td>${valor.nombre}</td>
                  <td>${valor.especialidad}</td>
                  <td>${valor.numero_cama}</td>
              <td>
              <button class='btn btn-success' onclick='editar(${valor.id_paciente
                })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${valor.id_paciente
                })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${valor.id_paciente
                })'>Ver</button>
              </td></tr>
                  `;
        });
        $("#tabla_pacientes").html(html);
    });
};
 
var guardaryeditar = (e) => {
    e.preventDefault();
    var dato = new FormData($("#frm_pacientes")[0]);
    var ruta = "";
    var id_paciente = document.getElementById("id_paciente").value;
    if (id_paciente > 0) {
        ruta = "../../Controllers/pacientes.controller.php?op=actualizar";
    } else {
        ruta = "../../Controllers/pacientes.controller.php?op=insertar";
    }
    $.ajax({
        url: ruta,
        type: "POST",
        data: dato,
        contentType: false,
        processData: false,
        success: function (res) {
            res = JSON.parse(res);
            if (res == "ok") {
                Swal.fire("pacientes", "Registrado con éxito", "success");
                todos();
                limpia_Cajas();
            } else {
                Swal.fire("pacientes", "Error al guardo, intente mas tarde", "error");
            }
        },
    });
};
 
var cargar_pacientes = () => {
    return new Promise((resolve, reject) => {
        $.post("../../Controllers/hospitales.controller.php?op=todos", (res) => {
            res = JSON.parse(res);
            var html = "";
            $.each(res, (index, val) => {
                html += `<option value="${val.id_hospital}"> ${val.nombre}</option>`;
            });
            $("#id_hospital").html(html);
            resolve();
        }).fail((error) => {
            reject(error);
        });
    });
};
 
var editar = async (id_paciente) => {
    await cargar_pacientes();
    $.post(
        "../../Controllers/pacientes.controller.php?op=uno",
        { id_paciente: id_paciente },
        (res) => {
            res = JSON.parse(res);
 
            $("#id_paciente").val(res.id_paciente);
            $("#id_hospital").val(res.id_hospital);
            $("#nombre").val(res.nombre);
            $("#especialidad").val(res.especialidad);
            $("#numero_cama").val(res.numero_cama);
        }
    );
    $("#Modal_pacientes").modal("show");
};
 
var eliminar = (id_paciente) => {
    Swal.fire({
        title: "Paciente",
        text: "Esta seguro de eliminar al paciente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
    }).then((result) => {
        if (result.isConfirmed) {
            $.post(
                "../../Controllers/pacientes.controller.php?op=eliminar",
                { id_paciente: id_paciente },
                (res) => {
                    res = JSON.parse(res);
                    if (res === "ok") {
                        Swal.fire("pacientes", "Pedido Eliminado", "success");
                        todos();
                    } else {
                        Swal.fire("Error", res, "error");
                    }
                }
            );
        }
    });
 
    limpia_Cajas();
};
 
var limpia_Cajas = () => {
    document.getElementById("id_paciente").value = "";
    document.getElementById("id_hospital").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("especialidad").value = "";
    document.getElementById("numero_cama").value = "";
 
    $("#Modal_pacientes").modal("hide");
};
init();