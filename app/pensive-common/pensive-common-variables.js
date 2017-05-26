angular
    .module('PensiveCommon')
    .factory('PensiveCommonVariables', PensiveCommonVariableFactory);

    function PensiveCommonVariableFactory () {
        return {
            pensiveApiPath: 'http://localhost:3000/'
        };
    }