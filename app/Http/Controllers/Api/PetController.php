<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kreait\Firebase\Factory;

class PetController extends Controller
{
    private $database;
    private $petsRoot = 'pets';

    public function __construct()
    {
        $firebase = (new Factory)->withServiceAccount(base_path() . '/firebase-conf/' . env('FIREBASE_SERVICE_ACCOUNT_JSON_KEY'));
        $this->database = $firebase->createDatabase();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // $pets = $this->database->getReference($this->petsRoot)->orderByKey('createdAt', 'desc')->limitToLast(5)->getValue();
        $pets = $this->database->getReference($this->petsRoot)->orderByKey('createdAt', 'desc')->limitToFirst(5)->getValue();
        // $pets = $this->database->getReference($this->petsRoot)->getValue();
        return response()->json( $pets );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $newPostKey = $this->database->getReference($this->petsRoot)->push()->getKey();

        try {
            $this->database->getReference()->getChild($this->petsRoot)->getChild($newPostKey)->set($request->all());
            return response()->json([
                'petAdded' => true,
                'redirectTo' => url('/pets/' . $newPostKey)
            ]);

        } catch (\InvalidArgumentException $e) {

            return response()->json($e->getMessage());

        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json( $this->database->getReference($this->petsRoot)->getChild($id)->getValue() );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
