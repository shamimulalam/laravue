<?php

namespace App\Http\Controllers\API;

use App\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LanguageController extends Controller
{
    public function index()
    {
        try {
            $data['data']=Language::orderBy('name','ASCE')->get();
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }
}
