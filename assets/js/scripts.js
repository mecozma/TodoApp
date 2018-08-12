$(document).ready(function() {
    // check off specific todos by clicking
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
     });

    //  Click on X to delete Todos
    $('ul').on('click', 'span', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
    });

    // Add a new todo
    $("input[type='text']").on('keypress', function(event) {
        if (event.which === 13) {
            // collecting the new todo from the input
            var newTodoValue = $('input').val();
            $(this).val("");
            $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + newTodoValue + '</li>')
        }
    });

    // Toggle the input
    $('.fa-plus').on('click', function() {
        $("input[type='text']").fadeToggle();
    });
   
});
