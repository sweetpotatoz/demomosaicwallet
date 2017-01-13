function AppBackground($state, $rootScope) {
    'ngInject';

    return {
        restrict: 'A',
        link: function(scope, element, rootScope) {

            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams) {
                    if (toState.title == 'Home' || toState.title == 'Login' || toState.title == 'Signup') {
                        element.css({
                            //'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("images/DF-background.png")',
                            'background': 'url("images/DF-background.png")',
                            'background-repeat': 'no-repeat',  
                            'background-position': 'center',
                            'background-size': '50% 50%'
            
                        });
                    } else {
                        element.css({
                            'background': 'rgb(242, 242, 242)'
                        });
                    }

                })

        }
    };
}

export default AppBackground;