<?php

function get_page()
{
    echo file_get_contents('templates/'.$_POST['page_name']);
}

if(isset($_POST['task']))
{
    switch($_POST['task'])
    {
        case 'get_page':
            get_page();
        break;
        
        default:
            echo "bad request";
        break;
    }
}
else
{
    echo "No request";
}

?>
