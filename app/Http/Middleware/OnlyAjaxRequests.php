<?php

namespace App\Http\Middleware;

use Closure;

class OnlyAjaxRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!$request->ajax()) {
            return response('<h1>No direct access to api! </h1>', 405);
        }

        return $next($request);
    }
}
