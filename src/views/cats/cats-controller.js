goog.provide('norris.cats.catCtrl');



/**
 * Constructor for the CatView Controller.
 * @param {!Object} $scope Angular scope.
 * @constructor
 */
norris.cats.catCtrl = function($scope) {
  this.cats = [
    {name: 'Morris', color: 'Orange'}
  ];
  console.log('cats', $scope);
};
