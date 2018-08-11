// check off specific todos by clicking
$(document).ready(function() {
    $('li').on('click', function() {
        // if li is gray
        if($(this).css('color') === 'rgb(128, 128, 128)') {
            // turn it black
            $(this).css({
                textDecoration: 'none',
                color: 'black'
            });
        } else {
            // turn it gray
            $(this).css({
                textDecoration: 'line-through',
                color: 'gray'
               });
        }
     
    });
});
