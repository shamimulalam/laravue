<?php
/**
 * Created by PhpStorm.
 * User: shawon
 * Date: 1/28/19
 * Time: 5:41 PM
 */

function managePagination($obj)
{
    $serial=1;
    if($obj->currentPage()>1)
    {
        $serial=(($obj->currentPage()-1)*$obj->perPage())+1;
    }
    return $serial;
}