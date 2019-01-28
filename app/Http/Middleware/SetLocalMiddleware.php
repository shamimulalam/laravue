<?php

namespace App\Http\Middleware;

use App\Language;
use Closure;
use Illuminate\Support\Facades\App;

class SetLocalMiddleware
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
        if(App::getLocale()!=$request->segment(2)) {
            $languages = Language::all();
            if($request->segment(2)==null)
            {
                $segment=app()->getLocale();
            }else{
                $segment=$request->segment(2);
            }
            foreach ($languages as $language) {
                if ($segment == $language->slug) {
                    App::setLocale($segment);
                    return $next($request);
                }
            }
            App::setLocale($languages[0]->slug);
        }

        return $next($request);
    }
}
