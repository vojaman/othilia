<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash' => [
                'message' => fn () => $request->session()->get('status')
            ],
            // Lazily
            'translation' => fn () => $this->translations(app()->getLocale()),
            'breadcrumbs' => function (Request $request) {
                return $request->route()->breadcrumbs()->jsonSerialize();
            }
        ]);
    }

    /**
     * Returns the translations array.
     * These locales will be sent to Vue via the Inertia's share method.
     * @param $locale string - The locale whose translations you want to find
     * @return array
     */
    public function translations(string $locale) : array
    {
        $translationFile = require(base_path("resources/lang/${locale}/frontend.php"));
        $translation = [];
        foreach ($translationFile as $key => $file) {
            $translation[$key] = $file;
        }
        return $translation;
    }
}
