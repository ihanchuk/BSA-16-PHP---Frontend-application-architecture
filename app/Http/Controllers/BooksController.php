<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Books\Book;
use App\User;

class BooksController extends Controller
{
    /**
     * Setting midleware to prevent
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
        $allBooks = Book::all()->toArray();
        return response()->json($allBooks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'author'  => 'required|string',
            'genre'     => 'required|string',
            'year'     => 'required|Integer|Min:4',
            'title'     => 'required',
        ]);

        Book::create($request->all());
        return response()->json(["created"=>true]);
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
        $book = Book::findOrFail($id);

        $book->author = $request->get("author");
        $book->genre = $request->get("genre");
        $book->year = $request->get("year");
        $book->title = $request->get("title");
        $book->save();
        return "Book updated";
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Book::create($request->all());

        return "Book created";
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        $allBooks = Book::find($id)->toArray();
        return response()->json($allBooks);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       Book::destroy($id);
    }
}
