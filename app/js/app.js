// Declare app level module which depends on filters, and services
angular.module('cookbook', ["ngRoute", "ui.bootstrap", "ngSanitize"]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/recipes/new', {templateUrl: 'templates/editRecipe.html', controller: "NewRecipeCtrl"}).
      when('/recipes/:recipeId/edit', {templateUrl: 'templates/editRecipe.html', controller: "EditRecipeCtrl"}).
      when('/recipes/:recipeId', {templateUrl: 'templates/recipe.html', controller: "RecipeShowCtrl"});
  }]);