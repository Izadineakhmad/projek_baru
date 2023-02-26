// LOADER
$(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222')
    }, 900);
  });

// NAVBAR DROPDOWN
(function ($) {
    $(function () {

        //  open and close nav 
        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);


// ANIMATION NAVBAR
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.remove('show');
    } else {
        document.getElementById("header").classList.add('show');
    }
    prevScrollpos = currentScrollPos;

}
//]]>