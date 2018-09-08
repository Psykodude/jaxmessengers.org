(function(){
    app.controller('maincontroller',['$scope','$rootScope','$http','$filter','$window', function($scope,$rootScope,$http,$filter,$window){
    $scope.hola = new Date();
    $scope.status = false;
    $scope.orientation = 'horizontal'
    $scope.crewshow = false;
    if($window.orientation == 90){
        $scope.orientation = 'vertical';
        $scope.crew = 'col-xs-12';
        $scope.main = 'col-xs-12';
        $scope.setlist = 'col-xs-12';
    }else{
        $scope.orientation = 'horizontal';
        $scope.crew = 'col-xs-1';
        $scope.main = 'col-xs-10';
        $scope.setlist = 'col-xs-1';        
    }
    $scope.maintext = 'maintext';

$scope.changestatustocrew = function(){
        if($scope.status == 'crew'){
            $scope.status = false;
        }else{    
            $scope.status = 'crew';
        }
}
$scope.changestatustosetlist = function(){
    if($scope.status == 'setlist'){
            $scope.status = false;
        }else{    
            $scope.status = 'setlist';
        }
}
    
}])}())