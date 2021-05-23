$('.cat').click(function(){
    var page_name = $(this).attr('data');
    get_page(page_name);
});

function get_page(page_name)
{
    $.ajax({
        'url' : 'handle_page_request.php',
        'type' : 'POST',
        'data' : {task: 'get_page', page_name: page_name+'.html'},
        'success' : function(template)
        {
            $('#page').html(template);
        },
        'error' : function(request,error)
        {
            alert("(get_page) : Impossible de recupérer le template !");
        }
    });
}