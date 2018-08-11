$(document).ready(function() {
    // check off specific todos by clicking
    $('li').on('click', function() {
    
        $(this).toggleClass('completed');

     });

    //  Click on X to delete Todos
    $('span').on('click', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
    })
});
