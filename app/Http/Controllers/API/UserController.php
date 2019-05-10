<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data['data']['users']=User::latest()->paginate(10);
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|string|max:191',
            'email'=>'required|string|max:191|unique:users',
            'password'=>'required|string|min:6',
            'type'=>'required|string|max:191',
        ]);
        try {
            $data['data']=User::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->address,
                'bio' => $request->bio,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'photo' => $request->photo,
                'type' => $request->type,
            ]);
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $data['data']=User::findOrFail($id);
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        try {
            $data['data']=Auth::user();
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required|string|max:191',
            'email'=>'required|string|max:191|unique:users,email,'.$id,
            'password'=>'sometimes|string|min:6',
            'type'=>'required|string|max:191',
        ]);
        try {
            $user=User::findOrFail($id);
            $data['data']=$user->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->address,
                'bio' => $request->bio,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'photo' => $request->photo,
                'type' => $request->type,
            ]);
            $data['code']=111;
            $data['details']='Success';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $data['data']=User::findOrFail($id)->delete();
            $data['code']=111;
            $data['details']='Deleted';
        }catch (\Exception $exception)
        {
            $data['code']=999;
            $data['details']=$exception->getMessage();
        }
        return $data;
    }
}
