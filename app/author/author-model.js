angular
    .module('author')
    .factory('AuthorModel', function(){

        function AuthorModel(data){
            return mapToModel(data);
        }

        function mapToModel(data){
            return {
                lastName : data.lastName,
                firstName : data.firstName,
                careerDetails : data.careerDetails,
                educationBackground : data.educationBackground,
                bookIds: data.bookIds
            }
        }

        return AuthorModel;

    });