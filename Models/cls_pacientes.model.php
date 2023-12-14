<?php
require_once('cls_conexion.model.php');
class Clase_Pacientes
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT pacientes.id_paciente, hospitales.nombre as hospitales, pacientes.nombre, pacientes.especialidad, pacientes.numero_cama FROM `pacientes` INNER JOIN hospitales ON hospitales.id_hospital = pacientes.id_hospital";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function uno($id_paciente)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `pacientes` WHERE id_paciente=$id_paciente";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function insertar($id_hospital, $nombre, $especialidad, $numero_cama)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `pacientes`(`id_hospital`, `nombre`, `especialidad`, `numero_cama`) VALUES('$id_hospital','$nombre','$especialidad','$numero_cama')";
            $result = mysqli_query($con, $cadena);

            // Aquí puedes realizar más operaciones después de insertar, si es necesario

            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($id_paciente, $id_hospital, $nombre, $especialidad, $numero_cama)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `pacientes` SET `id_hospital`='$id_hospital', `nombre`='$nombre', `especialidad`='$especialidad', `numero_cama`='$numero_cama' WHERE `id_paciente`= $id_paciente";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($id_paciente)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM `pacientes` WHERE id_paciente=$id_paciente";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
?>