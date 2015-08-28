(function(){
	'use strict';

	angular.module('route').controller('Schedule',['$scope','$ionicPlatform','$rootScope','$cordovaLocalNotification','$cordovaSms',Schedule]);


		function Schedule($scope,$ionicPlatform,$rootScope,$cordovaLocalNotification,$cordovaSms){
var vm=this;

vm.SetScheduler=function(){
	
var v= document.getElementById('myTime').value;
var array=v.split(':');

if (!vm.frequency)
  alert('Set Freuency!!');
else{

  var mon= vm.isMon ? 1:0;
var tues= vm.isTues ? 1:0;
  var wed= vm.isWed ? 1:0;
  var thurs= vm.isThurs ? 1:0;
  var fri= vm.isFri ? 1:0;
  var sat= vm.isSat ? 1:0;
  var sund= vm.isSun ? 1:0;
    
     db.transaction(function (tx) {
     tx.executeSql('INSERT INTO Schedule (Mon,Tues,Wed,Thurs,Fri,Sat,Sun,frequency) VALUES (?,?,?,?,?,?,?,?)',[mon,tues,wed,thurs,fri,sat,sund,vm.frequency],function(tx,result){
      var insId=result.insertId;
      
      //************************Setting Notification***********************

 $ionicPlatform.ready(function() {
var now = new Date().getTime();
      var _10SecondsFromNow = new Date(now + 10 * 1000);
       var _5SecondsFromNow = new Date(now + 5 * 1000);
var d= new Date();
    
      // $cordovaLocalNotification.schedule([{
      //   id: insId,
      //   title: '1st one',
      //   text: 'Text here',
      //   at: d.setHours(+array[0], +array[1], 0)
      // }
      // ]).then(function (result) {
      //   // ...
      // });

  $cordovaLocalNotification.add({
        id: insId,
        title: 'Added Notification',
        text: 'Text here',
       firstAt: wednesday,
        every: 'week'
       // at: d.setHours(+array[0], +array[1], 0)
      }
      ).then(function (result) {
        // ...
      });


});


//*******************Notification Ended***********************
    });
    });

}


console.log('number',number);

}

 $scope.SendSMS=function(msgtxt){
   $ionicPlatform.ready(function() {
		var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
               // intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };
           $cordovaSms
      .send('03343753618',msgtxt, options)
      .then(function() {
        alert("SMS was sent successfully");
      }, function(error) {
       alert("Error");
      });
    });
    }

$rootScope.$on('$cordovaLocalNotification:trigger',
    function (event, notification, state) {
      var note_id=notification.id;                                          //'hello World';
      //*************** DB selection*******************
      db.transaction(function(transaction) 
                  { 
   transaction.executeSql('SELECT frequency FROM Schedule WHERE Schedule_id='+ note_id + ';', [],function(transaction, result) 
   { 
      if (result != null && result.rows != null) 
      { 
        for (var bm = 0; bm < result.rows.length; bm++) 
        { 
         var rowb = result.rows.item(bm); 
         fr=rowb.frequency;
             //    $scope.SendSMS(fr); 
       } 
      }
});
      
   });
    });



};

})();