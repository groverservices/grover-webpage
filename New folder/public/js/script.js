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

jQuery('document').ready(function($){
    var menuClose = $('#closer'),
        menu = $('.navegación ul');

menuClose.click(function() {
    if(menu.hasClass('show')) {
        menu.removeClass('show');
    } else {
        menu.addClass('show');
    }

   });
   var menuClose = $('#closer2'),
        menu = $('.navegación ul');

menuClose.click(function() {
    if(menu.hasClass('show')) {
        menu.removeClass('show');
    } else {
        menu.addClass('show');
    }

   });
   var menuClose = $('#closer3'),
        menu = $('.navegación ul');

menuClose.click(function() {
    if(menu.hasClass('show')) {
        menu.removeClass('show');
    } else {
        menu.addClass('show');
    }

   });
   var menuClose = $('#closer4'),
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
 


jQuery('document').ready(function($){ 
    $("#boton1").click(function() {
        $('html, body').animate({
            scrollTop: $("#GroverApp").offset().top
        }, 1000);
    });
    $("#boton2").click(function() {
        $('html, body').animate({
            scrollTop: $("#xqGrover").offset().top
        }, 1000);
    });
    $("#boton3").click(function() {
        $('html, body').animate({
            scrollTop: $("#tupack").offset().top
        }, 1000);
    });
    $("#boton4").click(function() {
        $('html, body').animate({
            scrollTop: $("#vendefacil").offset().top
        }, 1000);
    });
    $("#boton5").click(function() {
        $('html, body').animate({
            scrollTop: $("#tupack").offset().top
        }, 1000);
    });
    $("#boton6").click(function() {
        $('html, body').animate({
            scrollTop: $("#footerScroll").offset().top
        }, 1000);
    });
});



