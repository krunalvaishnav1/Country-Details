angular.module('myApp', [])
    .controller('myController', function ($scope, $http) {
        $http.get('api.json')
            .then(function (response) {
                $scope.countries = response.data;
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });

        $scope.showCountryDetails = function (country) {
            $scope.selectedCountry = country;
            angular.forEach($scope.countries, function (c) {
                c.showDetails = (c !== country);
            });
        };      

        $scope.hideCountryDetails = function () {
            $scope.selectedCountry = null;
            angular.forEach($scope.countries, function (c) {
                c.showDetails = false;
            });
        };
    });




    

