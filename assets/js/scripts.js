// check off specific todos by clicking
$(document).ready(function() {
    $('li').on('click', function() {
    
        $(this).toggleClass('completed');

     });
});
