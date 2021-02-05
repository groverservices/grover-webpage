jQuery('document').ready(function($){
    var menuRes = $('.menu-icon'),
        menu = $('.navegación ul');

menuRes.click(function() {
    if(menu.hasClass('show')) {
        menu.removeClass('show');
    } else {
        menu.addClass('show');
    }

   });

});

jQuery('document').ready(function($){
    var menuClose = $('.menu-icon-close'),
        menu = $('.navegación ul');

menuClose.click(function() {
    if(menu.hasClass('show')) {
        menu.removeClass('show');
    } else {
        menu.addClass('show');
    }

   });
});

// opciones


function mostrarListado() {
    document.getElementById('premio').style.display = 'block';
}

function ocultarListado() {
    document.getElementById('premio').style.display = 'none';
}





