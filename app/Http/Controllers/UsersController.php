<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Books\Book;
use Illuminate\Http\Request;

use App\Http\Requests;

class UsersController extends Controller
{
    /**
     * Setting middleware to prevent
     * non Ajax requests.
     */

    public function __construct()
    {
        $this->middleware('ajaxRequest');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        $userProfile = $user->toArray();
        $userProfile["books"]  = $user->books->toArray();
        return response()->json($userProfile);
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
        $user = User::findOrFail($id);

        $user->first_name = $request->get("first_name");
        $user->last_name = $request->get("last_name");
        $user->email = $request->get("email");
        $user->save();
        return "User updated";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        User::create($request->all());

        return "User created";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $userBooks = $user->books->toArray();

        foreach($userBooks as $book){
            $b  = Book::findOrFail($book["id"]);
            $b->book_user_id = null;
            $b->save();
        }

        $user->delete();

        return "User deleted";
    }
}
