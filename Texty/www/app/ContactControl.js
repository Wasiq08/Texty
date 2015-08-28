(function(){
	'use strict';

	angular.module('route').controller('ContactPopulate',['ContactData','$rootScope','$scope','$state','$ionicPlatform',ContactPopulate]);

function ContactPopulate(ContactData,$rootScope,$scope,$state,$ionicPlatform)
{
	var vm=this;
  var insId=0;
	//alert("hit");

vm.contacts=ContactData.getContacts();
 // $rootScope.contacts=[];
	
	db.transaction(function(transaction) 
                  { 
   transaction.executeSql('SELECT contact_id,name,relation,number FROM AppContact ;', [],function(transaction, result) 
   { 
      if (result != null && result.rows != null) 
      { 
        for (var bm = 0; bm < result.rows.length; bm++) 
        { 
         var rowb = result.rows.item(bm); 
         var data={
          name: rowb.name,
      id: rowb.contact_id,
      number:rowb.number,
      relation:rowb.relation
          
        };
           //$rootScope.contacts.push(data);
        ContactData.add(data);
        // Make sure to apply scope change so that ng-repeat updates
        $scope.listCanSwipe=true;
		//$scope.$apply();
		
       } 
      } 
     }); 
   });

	$scope.delete_con=function(id,index){
		//alert(id);

		db.transaction(function (tx) {
     tx.executeSql('DELETE FROM AppContact WHERE contact_id='+ id);
	 //ContactData.del(index);
   vm.contacts.splice(index, 1);
	 $scope.$apply();
    });
    db.transaction(function (tx) {
     tx.executeSql('DELETE FROM Templates WHERE contact_id='+ id);
   });
	}
	
   

};	
})();