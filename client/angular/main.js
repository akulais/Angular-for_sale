var house_app = angular.module('house_app', ['ngRoute', 'angularMoment', 'angular.filter']);

        house_app.config(function($routeProvider) {

//ROUTES AS SET BY NAV BAR ON INDEX.HTML

            $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/home', {
                templateUrl: 'partials/home.html'
            })
            .when('/specs', {
                templateUrl: 'partials/specs.html'
            })
            .when('/nearby', {
                templateUrl: 'partials/nearby.html'
            });
        });