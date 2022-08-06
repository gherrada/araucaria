$(document).ready(

    function(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    }
    ,
    $('#enviarCorreo').on("click", function(){
        alert("El correo fue enviado correctamente...");
    })
    ,
    $('#agregarFavoritos').on("click", function(){
        alert("El articulo se ha añadido a favoritos correctamente...");
    })
    ,
    $('u').on("dblclick", function(){
        $(this).css({
        "color": "red",
        });
    })
    ,
    $('.card-title').on("click",function(){
        $('.card-text').toggle();
    // alert("asdasd");
    })
    ,
);