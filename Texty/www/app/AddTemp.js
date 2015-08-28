(function(){
	'use strict';

	angular.module('route').controller('AddTemp',['TemplateData','$scope','$state','$http',AddTemp]);

function AddTemp(TemplateData,$scope,$state,$http){

var vm=this;
vm.addTemplate=function(){
	
// 		db.transaction(function (tx) {
//      tx.executeSql('INSERT INTO Templates (msg,contact_id) VALUES (?,?)',[vm.msg,id],function(tx,result){
//       var insId=result.insertId;


//     var data={
//          msg: vm.msg,
//       tempId: insId
//         };

// /*var c = TemplateData.getTemplates();
// var l=c.length;*/

 
//   $state.go('home.contact-details');


//      });
//     });

/**/
var p=vm.privacy;
if(p=="private"){}
//alert("private selected");
else
      {
        var request = $http({
    method: "post",
    url: "http://www.technobrick.com/koiBhi.php",
    data:{msg: vm.msg,
          id: 8 },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

request.success(function (data) {
   alert("success");
console.log("success with data= ",data);
});


      }

      //**************** Add to private***************************
var temp=vm.msg;
var data={
          msg: temp,
      tempId:123
        };
 TemplateData.add(data);
db.transaction(function (tx) {
     tx.executeSql('INSERT INTO Templates (msg,contact_id) VALUES (?,?)',[temp,id],function(tx,result){
      var insId=result.insertId;
       });
   });

  $state.go('home.contact-details');

vm.msg="";

//********************************************
	}

};
}) ();