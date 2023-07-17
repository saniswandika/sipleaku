<?php

use App\Http\Controllers\api\AktivitasApi;
use App\Http\Controllers\api\AppLog;
use App\Http\Controllers\api\Lks;
use App\Http\Controllers\api\MasterAddress;
use App\Http\Controllers\api\NotificationApi;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Master Data
Route::middleware(['log.route'])->group(function () {
  Route::get('/kecamatan/{kabupatan_kota_id}', [MasterAddress::class, 'kecamatan']);
  Route::get('/kelurahan/{kecamatan_id}', [MasterAddress::class, 'kelurahan']);

  // LKS
  Route::get('/lks', [Lks::class, 'getAll'])->name('lks');
  Route::get('/lks/simple', [Lks::class, 'simple'])->name('lks/simple');
  Route::get('/log/admin', [AppLog::class, 'logAdmin'])->name('log/admin');
  Route::get('/notif', [NotificationApi::class, 'getAll'])->name('notif');
  Route::post('/update_notif', [NotificationApi::class, 'markAllAsRead'])->name('update_notif');
  Route::get('/aktivitas', [AktivitasApi::class, 'getAll'])->name('aktivitas');

  Route::get('/drive/{folder}/{filename}', function ($folder, $filename) {
    $path = storage_path('app/public/uploads/' . $folder . "/" . $filename);
    if (!File::exists($path)) {
      abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
  });
});
