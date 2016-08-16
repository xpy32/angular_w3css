var app = angular.module('myApp', []);
app.controller('numbersCtrl', function($scope) {
    $scope.numbers = [
        {number:'15%',country:'Norway'},
        {number:'6.7%',country:'Sweden'},
        {number:'15%',country:'UK'},
        {number:'6.7%',country:'US'},
        {number:'7%',country:'China'},
        {number:'8%',country:'France'},
        {number:'20%',country:'Denmark'}
    ];
});
