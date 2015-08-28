(function(){
	'use strict';

	angular.module('route').controller('myTemplates',['TemplateData','$stateParams','$scope','$state','$ionicPlatform','$cordovaSms',myTemplates]);

function myTemplates(TemplateData,$stateParams,$scope,$state,$ionicPlatform,$cordovaSms)
{
var vm=this;
  
  if($stateParams.id){
    id=$stateParams.id
  }
  
if($stateParams.number){
  number=parseInt($stateParams.number);
}

  vm.templates=TemplateData.getTemplates();
  TemplateData.flush();
  console.log("id= ",id);

 // $rootScope.contacts=[];
  
   db.transaction(function(transaction) 
                  { 
   transaction.executeSql('SELECT template_id,msg FROM Templates WHERE contact_id='+id+';', [],function(transaction, result) 
   { 
      if (result != null && result.rows != null) 
      { 
        for (var bm = 0; bm < result.rows.length; bm++) 
        { 
         var rowb = result.rows.item(bm); 
         var data={
          msg: rowb.msg,
      tempId: rowb.template_id,
       };
           //$rootScope.contacts.push(data);
        TemplateData.add(data);
        // Make sure to apply scope change so that ng-repeat updates
        $scope.listCanSwipe=true;
    //$scope.$apply();
    
       } 
      } 
     }); 
   });

if($stateParams.id)
vm.templates=TemplateData.getTemplates();

  $scope.delete_temp=function(idt,index){
    //alert(id);

    db.transaction(function (tx) {
     tx.executeSql('DELETE FROM Templates WHERE template_id='+ idt);
   //ContactData.del(index);
   vm.templates.splice(index, 1);
   $scope.$apply();
    });
  }

   $scope.Send=function(){

     $ionicPlatform.ready(function() {
        
          
//---------------------------CONFIGURATION--------------------

var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
               // intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };
//var num= $scope.number;
           $cordovaSms
      .send('03343753618', 'Chal gaya bhai', options)
      .then(function() {
        alert("SMS was sent successfully");
      }, function(error) {
       alert("Error");
      });
//alert($scope.number); 
   // alert("hello");
 
    });

   }

};	
})();