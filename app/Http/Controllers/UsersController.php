<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Providers\UtilityServiceProvider as u;
use App\User;

class UsersController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $you = auth()->user()->id;
        $users = DB::table('users')
        ->select('users.id', 'users.name', 'users.email', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
        ->whereNull('deleted_at')
        ->where('branch_id',auth()->user()->branch_id)
        ->get();
        return response()->json( compact('users', 'you') );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = DB::table('users')
        ->select('users.id', 'users.name', 'users.email', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = DB::table('users')
        ->select('users.id', 'users.name', 'users.email', 'users.menuroles as roles', 'users.status')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
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
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256'
        ]);
        $user = User::find($id);
        $user->name       = $request->input('name');
        $user->email      = $request->input('email');
        $user->status      = $request->input('status');
        if($request->password){
            $user->password = bcrypt($request->password);
        }
        $roles = $request->roles;
        $menuroles = "";
        foreach($roles AS $role){
            $role = (object) $role;
            if($role->checked==true){
                $menuroles .= $menuroles == "" ? $role->name : ','.$role->name;
                $model_has_roles = u::getObject(array('role_id'=>$role->id,'model_id'=>$user->id),'model_has_roles');
                if(!$model_has_roles){
                    u::insertSimpleRow(array('role_id'=>$role->id,'model_id'=>$user->id,'model_type'=>'App\User'),'model_has_roles');
                }
            }else{
                u::query("DELETE FROM model_has_roles WHERE role_id = $role->id AND model_id=$user->id");
            }
        }
        $user->menuroles = $menuroles;
        $user->save();
        
        //$request->session()->flash('message', 'Successfully updated user');
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
    public function add(Request $request)
    {
        $user =new User();
        $user->branch_id  = auth()->user()->branch_id;
        $user->name       = $request->input('name');
        $user->email      = $request->input('email');
        $user->password = bcrypt($request->password);
        $user->status      = $request->input('status');
        $user->email_verified_at = date('Y-m-d H:i:s');
        $user->save();
        $roles = $request->roles;
        $menuroles = "";
        foreach($roles AS $role){
            $role = (object) $role;
            if(isset($role->checked) && $role->checked==true){
                $menuroles .= $menuroles == "" ? $role->name : ','.$role->name;
                $model_has_roles = u::getObject(array('role_id'=>$role->id,'model_id'=>$user->id),'model_has_roles');
                if(!$model_has_roles){
                    u::insertSimpleRow(array('role_id'=>$role->id,'model_id'=>$user->id,'model_type'=>'App\User'),'model_has_roles');
                }
            }else{
                u::query("DELETE FROM model_has_roles WHERE role_id = $role->id AND model_id=$user->id");
            }
        }
        $user->menuroles = $menuroles;
        $user->save();
        //$request->session()->flash('message', 'Successfully updated user');
        return response()->json( ['status' => 'success'] );
    }
}
