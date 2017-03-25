'use strict';

angular.module('confusionApp')

            .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

             $scope.dishes= menuFactory.getDishes();
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])
            .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
                        $scope.dish = dish;
                        
                    }])

        .controller('DishCommentController', ['$scope', function($scope) {
          $scope.dishcomment={author:'',comment:'',rating:'5',date:''};
          $scope.invalid=true;

         
            
              $scope.submitComment = function () {
                $scope.dishcomment.date= new Date().toISOString();
                $scope.dish.comments.push($scope.dishcomment)
                console.log($scope.dishcomment);
                console.log($scope.dish);
                $scope.dishcomment={author:'',comment:'',rating:'5',date:''};
                 $scope.commentForm.$setPristine();
         
               
              }
                
      }])
        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory','corporateFactory', function($scope, menuFactory,corporateFactory) {
            
            var promotion=menuFactory.getPromotion();
            $scope.promotion=promotion;
            $scope.specialDish=menuFactory.getDish(0);
            $scope.leader=corporateFactory.getLeader(3);
           
        }])

        .controller('AboutController', ['$scope','corporateFactory', function($scope,corporateFactory) {
             $scope.leaders=corporateFactory.getLeaders();
            
        }])

;
