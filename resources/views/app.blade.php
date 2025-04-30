<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
        {{-- <script src="{{ asset('js/share.js') }}"></script> --}}
        <!-- <script src="{{ asset('vendor/laraberg/js/laraberg.js') }}"></script> -->
    </head>
    <body class="font-sans antialiased">
    @inertia

    @env ('local')
    <!--<script src="{{ env('APP_URL') }}/browser-sync/browser-sync-client.js"></script>-->
    @endenv
    </body>
</html>
