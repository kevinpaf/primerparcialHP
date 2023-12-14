<?php
require_once('../Models/cls_pacientes.model.php');

$pacientes = new Clase_Pacientes;

switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $pacientes->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $id_paciente = $_POST["id_paciente"];
        $datos = array();
        $datos = $pacientes->uno($id_paciente);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case 'insertar':
        $id_hospital = $_POST["id_hospital"];
        $nombre = $_POST["nombre"];
        $especialidad = $_POST["especialidad"];
        $numero_cama = $_POST["numero_cama"];
    
        $datos = array();
        $datos = $pacientes->insertar($id_hospital, $nombre, $especialidad, $numero_cama);
        echo json_encode($datos);
        break;
    case 'actualizar':
        $id_paciente = $_POST["id_paciente"];
        $id_hospital = $_POST["id_hospital"];
        $nombre = $_POST["nombre"];
        $especialidad = $_POST["especialidad"];
        $numero_cama = $_POST["numero_cama"];
        $datos = array();
        $datos = $pacientes->actualizar($id_paciente, $id_hospital, $nombre, $especialidad, $numero_cama);
        echo json_encode($datos);
        break;
    case 'eliminar':
        $id_paciente = $_POST["id_paciente"];
        $datos = array();
        $datos = $pacientes->eliminar($id_paciente);
        echo json_encode($datos);
        break;
}
?>
