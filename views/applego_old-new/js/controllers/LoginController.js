angular.module('applegoApp').controller('loginController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageWithoutHeader = true;
    $rootScope.setting.layout.paceTop = true;

    $scope.submitForm = function(form) {
        $state.go('home');
    };

    angular.element(document).ready(function () {
        $('[data-click="change-bg"]').click(function() {
            var targetImage = '[data-id="login-cover-image"]';
            var targetImageSrc = $(this).find('img').attr('src');
            var targetImageHtml = '<img src="'+ targetImageSrc +'" data-id="login-cover-image" />';

            $('.login-cover-image').prepend(targetImageHtml);
            $(targetImage).not('[src="'+ targetImageSrc +'"]').fadeOut('slow', function() {
                $(this).remove();
            });
            $('[data-click="change-bg"]').closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
        });
    });
});
