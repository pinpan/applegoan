'use strict';

/**
 * @ngdoc overview
 * @name applegoApp
 * @description
 * # applegoApp
 *
 * Main module of the application.
 */
var applegoApp = angular.module('applegoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router', //ngRoute',
    'ngSanitize',
    'ngTouch',
    //'ngMap',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ]);

  applegoApp
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/)
  .constant('LOCALES', {
    'locales': {
      'cs_CZ': 'Česky',
      'en_US': 'English'
    },
    'preferredLocale': 'en_US'
  });

  applegoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
    // .state('home', {
    //   url: '/home',
    //   views: {
    //       "header":    {templateUrl: "views/common/header.html"}
    //     , "footer":    {templateUrl: "views/common/footer.html"}
    //     , "home":      {templateUrl: "views/short/home.html"}
    //     , "contact":   {templateUrl: "views/short/contact.html"}
    //     , "team":      {templateUrl: "views/short/team.html"}
    //     , "services":  {templateUrl: "views/short/services.html"}
    //     , "faq":       {templateUrl: "views/short/faq.html"}
    //   },
    //   abstract: false
    // })

    .state ('home', {
      url: '/home'
    , data: {pageTitle: 'Applego - Home'}
    , templateUrl: 'views/short/home.html'
    })


    .state('member', {
      url: '/member'
      //, template: '<div ui-view></div>'
      , views: {
          "header":  {templateUrl: "views/common/header.html"}
        , "login":   {templateUrl: "views/security/login.html"}
        , "footer":  {templateUrl: "views/common/footer.html"}
      }
      , abstract: true
    })
    .state('login', {
        url: '/login'
      , data: { pageTitle: 'Login' }
      , templateUrl: "views/security/login.html"
    })
    .state('register', {
      url: '/register',
      data: { pageTitle: 'Registration' },
      templateUrl: 'views/security/register.html'
    })

    .state ('menu', {
        url: '/menu'
      //, template: '<div ui-view></div>'
      , views: {
          "header":    {templateUrl: "views/common/header.html"}
        , "blah": {templateUrl:"views/common/content.html"}
        , "footer":    {templateUrl: "views/common/footer.html"}
      }
      , abstract: true
    })
    .state ('services', {
      url: '/services'
    , data: {pageTitle: 'Services'}
    , templateUrl: 'views/long/services.html'
    })
    .state ('blog', {
      url: '/blog'
    , data: {pageTitle: 'AppBlog'}
    , templateUrl: 'views/long/blog.html'
    })
    .state ('solutions', {
      url: '/solutions'
    , data: {pageTitle: 'Solutions'}
    , templateUrl: 'views/long/solutions.html'
    })
    .state ('offer', {
      url: '/offer'
    , data: {pageTitle: 'Offer'}
    , templateUrl: 'views/long/offer.html'
    })
    .state ('about', {
        url: '/about'
      , data: {pageTitle: 'Applego - About'}
      , templateUrl: 'views/long/about.html'
    })
    .state ('menu.faq', {
        url: '/faq'
      , data: {pageTitle: 'Applego - FAQ'}
      , templateUrl: 'views/long/faq.html'
    })
    .state ('menu.team', {
      url: '/team',
      data: {pageTitle: 'Applego - Team'},
      templateUrl: 'views/long/team.html'
    })
    .state ('contact', {
      url: '/contact',
      data: {pageTitle: 'Applego - Contacts'},
      templateUrl: 'views/long/contact.html'
    });

    $urlRouterProvider.otherwise('/home');
  }]);


  // Angular debug info
  applegoApp
  .config(function ($compileProvider, DEBUG_MODE) {
    if (!DEBUG_MODE) {
      $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
    }
  })

  // Angular Translate
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
    }

    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.use(LOCALES.preferredLocale);
    $translateProvider.fallbackLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
  })
  // Angular Dynamic Locale
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
  }]);

/*
  applegoApp.component('userSolutation', {
    template: '<h1>Hello {{ $ctrl.getFullName() }}</h1>',
    bindings: { title: '', firstName: '<', lastName: '<' },
    controller: function() {
      this.getFullName = function() {
        return this.title + ' ' + this.firstName + ' ' + this.lastName;
      };
    }
  });
*/

/*
  applegoApp.component('userSalutation', {
    template: '<span class="hidden-md hidden-sm hidden-xs"> {{$ctrl.getSalute()}} {{ $ctrl.getFullName() }}</span>',
    bindings: { salute: '<', title: '<', firstName: '<', lastName: '<' },
    controller: function() {
      this.getFullName = function() {
        return this.title + ' ' + this.firstName + ' ' + this.lastName;
      };

      this.getSalute = function() {
        return this.salute;
      };
    }
  });
*/
applegoApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;

    //app.run(function($rootScope, $state, loginFactory) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
        var isAuthenticationRequired = toState.data && toState.data.requiresLogin && !loginFactory.isLoggedIn();

        if (isAuthenticationRequired == true) {
            loginFactory.setToState(toState);
            event.preventDefault();
            $state.go('log-in');
        }
    });

    $rootScope.$on('$stateNotFound', 
      function(event, unfoundState, fromState, fromParams){ 
          console.log(unfoundState.to); // "lazy.state"
          console.log(unfoundState.toParams); // {a:1, b:2}
          console.log(unfoundState.options); // {inherit:false} + default options
      }
    )

    $rootScope.$on("$stateChangeError", console.log.bind(console));
  }]);
