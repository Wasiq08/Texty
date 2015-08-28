(function(){
	'use strict';

	angular.module('route').controller('SideBarController',['$scope','$http','$rootScope', '$cordovaNetwork','$ionicPlatform',SideBarController]);


		function SideBarController($scope,$http,$rootScope,$cordovaNetwork,$ionicPlatform){
var vm=this;
document.getElementById('refresh').style.visibility='hidden';
/*$ionicPlatform.ready(function() {
 var isOnline = $cordovaNetwork.isOnline();
if(isOnline)
{
	alert("You are Online");
}
    var isOffline = $cordovaNetwork.isOffline();
if(isOffline)
{
	alert("You are Offline");
}

});*/

vm.trends=[];

vm.getData=function(){

	//  document.getElementById("message").textContent = "Fetching Data!! ";

//$ionicPlatform.ready(function() {

//var isOnline = $cordovaNetwork.isOnline();
var isOnline=true;
if(isOnline)
{

$http.get('http://www.technobrick.com/ekOr.php').success(function(data) {

 var message="";
var l=data.length;
var i=0;
for (i=0;i<l;i++)
{
	message += data[i].userName +" said: " + data[i].msg;
	var myObj={msg:data[i].msg,
			userName:data[i].userName}; 

			vm.trends.push(myObj);

}
document.getElementById('mybtn').style.visibility='hidden';
document.getElementById('refresh').style.visibility='visible';
  });


}

else
{alert("Internet connection not available");}

//});

}


vm.Refresh=function(){

	vm.trends=[];
	$http.get('http://www.technobrick.com/ekOr.php').success(function(data) {

 	var message="";
	var l=data.length;
	var i=0;
	for (i=0;i<l;i++)	
	{
	
	var myObj={msg:data[i].msg,
			userName:data[i].userName}; 

			vm.trends.push(myObj);

	}
  });
}

};



})();