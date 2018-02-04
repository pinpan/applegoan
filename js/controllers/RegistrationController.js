angular.module('applegoApp').controller('registrationController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageWithoutHeader = true;
    $rootScope.setting.layout.paceTop = true;

    $scope.submitForm = function(form) {
        $state.go('home');
    };

    angular.element(document).ready(function () {
        $('[data-click="change-bg"]').click(function() {
            var targetImage = '[data-id="registration-cover-image"]';
            var targetImageSrc = $(this).find('img').attr('src');
            var targetImageHtml = '<img src="'+ targetImageSrc +'" data-id="registration-cover-image" />';

            $('.registration-cover-image').prepend(targetImageHtml);
            $(targetImage).not('[src="'+ targetImageSrc +'"]').fadeOut('slow', function() {
                $(this).remove();
            });
            $('[data-click="change-bg"]').closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
        });
    });
});
