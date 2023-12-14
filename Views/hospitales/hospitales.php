<?php require_once('../html/head2.php') ?>

<div class="row">
    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de Hospitales</h5>

                <div class="table-responsive">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_hospitales">
                        Nuevo Hospital
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Nombre</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Ciudad</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Número de Camas</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Opciones</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tabla_hospitales">
                            <!-- Aquí se cargarán los datos de la tabla mediante JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Ventana Modal -->
<div class="modal fade" id="Modal_hospitales" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_hospitales">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Hospitales</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="id_hospital" id="id_hospital">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" required class="form-control" id="nombre" name="nombre" placeholder="nombre" onfocusout="control_nombre();">
                        <div class="alert alert-danger d-none" role="alert" id="ControlNombre">
</div>
                    </div>
                    <div class="form-group">
                        <label for="ciudad">Ciudad</label>
                        <input type="text" required class="form-control" id="ciudad" name="ciudad" placeholder="Ciudad">
                    </div>
                    <div class="form-group">
                        <label for="numero_camas">Número de Camas</label>
                        <input type="text" required class="form-control" id="numero_camas" name="numero_camas" placeholder="Número de Camas">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Grabar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>

<script src="hospitales.controller.js"></script>
<script src="hospitales.model.js"></script>
