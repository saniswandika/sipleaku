<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\BaseApi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class Lks extends BaseApi{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {

        $length = 10;
        $page = $request->page;
        $status = $request->status;
        $limit = (((int) $page) - 1) * $length;
        $data = [];
        $http_code = Response::HTTP_ACCEPTED;

        $data = $this->withPage($this->withStatus(User::select(), $status)
            ->where('user_role_id', '=', '2'), $page, $limit, $length)
            ->get();

        $total_data = count($this->withStatus(User::select(), $status)
            ->where('user_role_id', '=', '2')
            ->get());

        $response = [
            'message' => 'Retrieve data LKS',
            'total' => $total_data,
            'data' => $data
        ];

        if (count($response["data"]) > 0) {
            $http_code = Response::HTTP_OK;
        }

        $response = array_merge([
            'code' => $http_code
        ], $response);

        return response()->json($response, $http_code);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function simple(Request $request)
    {

        $length = 10;
        $page = $request->page;
        $search = $request->name;
        $status = $request->status;
        $limit = (((int) $page) - 1) * $length;
        $data = [];
        $http_code = Response::HTTP_ACCEPTED;

        $data = $this->withPage($this->withStatus(
            User::select(
                'users.id as id',
                'users.name as name',
                'users.url_slug as url_slug',
                'users.email as email',
                'user_identities.tanggal_expire as expire_date',
                'users.created_at as created_at',
                'user_identities.updated_at as updated_at',
                'user_identities.status_id as status_id',
                'user_activities.tanggal as last_update_activity',
                'user_statuses.name as status_name',
            ),
            $status
        )
            ->leftJoin(
                'user_activities',
                function ($q) {
                    $q->on(
                        'users.id',
                        '=',
                        'user_activities.user_id'
                    )->where('user_activities.tanggal', '=', DB::raw("(select max(`tanggal`) from user_activities where users.id = user_activities.user_id)"));
                }
            )
            ->leftJoin("user_statuses", "user_statuses.id", "=", "user_identities.status_id")
            ->where('users.name', "LIKE", "%{$search}%")
            ->where('user_role_id', '=', '2')
            ->groupBy('users.id')
            ->orderBy("last_update_activity", "DESC"), $page, $limit, $length)
            ->get();

        $total_data = count($this->withStatus(User::select(), $status)
            ->where('user_role_id', '=', '2')
            ->get());

        $response = [
            'message' => 'Retrieve data LKS simple',
            'total' => $total_data,
            'data' => $data
        ];

        if (count($response["data"]) > 0) {
            $http_code = Response::HTTP_OK;
        }

        $response = array_merge([
            'code' => $http_code
        ], $response);

        return response()->json($response, $http_code);
    }



    private function withStatus($eloquent, $status)
    {

        if (isset($status)) {
            return $eloquent->join(
                'user_identities',
                function ($q) use ($status) {
                    $q->on(
                        'users.id',
                        '=',
                        'user_identities.user_id'
                    )->whereIn(
                        'user_identities.status_id',
                        explode(',', $status)
                    );
                }
            );
        }
        return $eloquent->join(
            'user_identities',
            function ($q) {
                $q->on(
                    'users.id',
                    '=',
                    'user_identities.user_id'
                );
            }
        );
    }

    // private function withPage($eloquent, $page, $limit, $length)
    // {
    //     if (isset($page)) {
    //         return $eloquent
    //             ->skip($limit)
    //             ->take($length);
    //     }
    //     return $eloquent;
    // }
}
