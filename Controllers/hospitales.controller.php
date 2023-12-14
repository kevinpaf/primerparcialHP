<?php
require_once('../Models/cls_hospitales.model.php');

$hospitales = new Clase_Hospitales;

switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $hospitales->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $id_hospital = $_POST["id_hospital"];
        $datos = array();
        $datos = $hospitales->uno($id_hospital);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case 'insertar':
        $nombre = $_POST["nombre"];
        $ciudad = $_POST["ciudad"];
        $numero_camas = $_POST["numero_camas"];
    
        $datos = array();
        $datos = $hospitales->insertar($nombre, $ciudad, $numero_camas);
        echo json_encode($datos);
        break;
    case 'actualizar':
        $id_hospital = $_POST["id_hospital"];
        $nombre = $_POST["nombre"];
        $ciudad = $_POST["ciudad"];
        $numero_camas = $_POST["numero_camas"];
        $datos = array();
        $datos = $hospitales->actualizar($id_hospital, $nombre, $ciudad, $numero_camas);
        echo json_encode($datos);
        break;
    case 'eliminar':
        $id_hospital = $_POST["id_hospital"];
        $datos = array();
        $datos = $hospitales->eliminar($id_hospital);
        echo json_encode($datos);
        break;
        case "control_nombre":
            $nombre = $_POST["nombre"];
            $datos = array();
            $datos = $hospitales->control_nombre($nombre);
            $uno = mysqli_fetch_assoc($datos);
            echo json_encode($uno);
            break;
}
?>
