<?php

use App\Http\Controllers\Dashboard\BerandaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
})->middleware('guest');

Route::get('/beranda', [BerandaController::class, 'create'])->middleware(['auth', 'verified'])->name('beranda');

require __DIR__ . '/web/auth.php';
require __DIR__ . '/web/dashboard.php';
