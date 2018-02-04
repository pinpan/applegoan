
/**
 * @ngdoc function
 * @name applegoApp.directive:LanguageSelectDirective
 * @description
 * # LanguageSelectDirective
 * Directive to append language select and set its view and behavior
 */
angular.module('applegoApp')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';
    /*
      '<label>'+
      '{{"directives.language-select.Language" | translate}}:'+
      '&nbsp;&nbsp;' +
      '</label>'+
    */
    return {
      restrict: 'A',
      replace: true,
      template: ''
          //'<div class="language-select" ng-if="visible">'
            /* Works with Select
              '<select ng-model="currentLocaleDisplayName"'+
              'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
              'ng-change="changeLanguage(currentLocaleDisplayName)">'+
              '</select>'+
            */
            +'<ul  class="nav navbar-nav navbar-left langbar">'
            +'<li ng-repeat="ldn in localesCodes" >'
            +'<a href="javascript:;" ng-click="changeLanguage(ldn)" class="langbar">'
            +'<img src="img/{{ldn}}.svg" alt="{{ldn}}" width="16px"/>'
            +'</a>'
            +'</li>'
            +'</ul>'+
          //+'</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
        $scope.localesDisplayNames.length > 1;
        $scope.localesCodes = LocaleService.getLocalesCodes();
        $scope.locales = LocaleService.getLocales();

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocale(locale);
        };
      }
    };
  });
