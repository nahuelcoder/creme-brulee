$(document).ready(function () {
  // Habilita sticky-nav
  $(".sticky-nav-inicio").waypoint(function (direccion) {
    if (direccion == "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });

  // Animacion servicios
  $(".servicios").waypoint(
    function () {
      $(".js--servicios").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  // Animacion contacto
  $(".contacto").waypoint(
    function () {
      $(".js--contacto").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  // Scrolling

  // Selecciona todos los links con hashes
  $('a[href*="#"]')
    // Elimina los que no estan linkeados a nada
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Identifica los elementos hacia los que ir
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Si existe el target...
        if (target.length) {
          // Solo previene la opcion por default si la animacion ocurre
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback despues de la animacion
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Corrobora que el target esta en focus
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Agrega tabindex para elementos no focuseables
                $target.focus(); // Establece el foco de nuevo
              }
            }
          );
        }
      }
    });
});
