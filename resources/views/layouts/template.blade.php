<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">

    <!-- Icons -->
    {{--<link href="/assets/vendor/nucleo/css/nucleo-icons.css" rel="stylesheet">--}}
    <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet">

    <!-- Theme CSS -->
    {{--<link type="text/css" href="/assets/css/argon-design-system.min.css" rel="stylesheet">--}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

    @yield('content')

    <script type="text/javascript">
        const baseUrl = "{{ url('/') }}";
        /*let user = {}
        export default user;*/

        @if(session()->has('user'))

        // userIsLoggedIn = true;
        // const user = window.user  = {
        /*window.$user = {
            uid: {{$user['uid']}},
            email: {{$user['email']}},
            displayName: {{$user['displayName']}},
        }*/

        @endif
    </script>


    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
