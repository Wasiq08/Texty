var app = angular.module('route', ['ngCordova','ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
$stateProvider
//$ionicConfigProvider.tabs.position('bottom')

.state('home',{
  url:"/home",
  abstract: true,
  templateUrl:"app/layout/menu-layout.html"
})

.state('home.contacts',{
  url:"/contacts",
  views:{
  "tab-contacts":{
  templateUrl:"app/layout/contacts.html"
    }
  }
})

.state('home.contact-details',{
  cache : false,
  url:"/contact-details/:id/:number",
  views:{
  "tab-contacts":{
  templateUrl:"app/layout/contactDetails.html"
    }
  }
})

.state('home.sidebar',{
  url:"/sidebar",
  views:{
  "tab-trends":{
  templateUrl:"app/layout/sidebar.html"
    }
  }
})


.state('newContact',{
  url:"/newContact",
 
  templateUrl:"app/layout/form.html",
  params:      {'index': null, 'anotherKey': null},
  
})

.state('newTemplate',{
  url:"/newTemplate",
  templateUrl:"app/layout/newTemplate.html"
})

.state('Schedule',{
  url:"/Schedule",
  templateUrl:"app/layout/Schedule.html"
})

$urlRouterProvider.otherwise('/home/contacts');
});


/*app.factory('Items', function () {
        var contacts = [{
            name: 'Apples',
            id: 312,
            number: 3213154
        }];

        return {
            add: function (item) {
                contacts.push(item);
            },

            get: function () {
                return contacts;
            }
        }
    });
*/


app.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
});


