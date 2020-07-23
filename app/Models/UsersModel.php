<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = "users";
    public $timestamps = false;

    protected $fillable = [
        'id',
        'firstname',
        'lastname',
        'email',
        'password',
    ];


}
