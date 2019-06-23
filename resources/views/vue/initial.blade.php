@extends('layouts.main')

@section('content')
    <vue-snotify></vue-snotify>     

    <preloader-component></preloader-component>

    <router-view></router-view>
@endsection