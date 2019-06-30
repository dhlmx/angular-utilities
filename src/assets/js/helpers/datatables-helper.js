var dataTablesHelper = function() {
    var activeDataTable = function(tableSelector, restart) {
        if (restart === undefined || restart === null || typeof restart !== "boolean") { restart = false; }

        if (restart) {
            $(tableSelector).DataTable().destroy();
        }

        $(tableSelector).DataTable({
            "language": {
                "decimal":        "",
                "emptyTable":     "Información no disponible",
                "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
                "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
                "infoFiltered":   "(filtrado de _MAX_ registros totales)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Mostrar _MENU_ registros",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar:",
                "zeroRecords":    "Ningún registro encontrado",
                "paginate": {
                    "first":      "Primero",
                    "last":       "Ultimo",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "aria": {
                    "sortAscending":  ": activar para ordenación ascendente",
                    "sortDescending": ": activar para ordenación descendente"
                }
            },
            "order": [[ 0, "asc" ]],
            "pagingType": "full_numbers"
        });
    };
    
    return {
        activeDataTable: activeDataTable
    };
}();