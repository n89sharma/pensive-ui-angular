angular
    .module('author')
    .factory('AuthorModel', function(){

        var AuthorModel = {
            model: {},
            rawData: {},
            mapToModel: mapToModel,
            mapToData: mapToData
        };
        
        function AuthorModel(data){
        }

        function mapToModel(data){
            return {
                id: data.id,
                lastName : data.lastName,
                firstName : data.firstName,
                careerDetails : data.careerDetails,
                educationBackground : data.educationBackground,
                bookIds: data.bookIds
            }
        }
        
        function mapToData(author){
            return {
                id: author.id,
                lastName : author.lastName,
                firstName : author.firstName,
                careerDetails : author.careerDetails,
                educationBackground : author.educationBackground,
                bookIds: author.bookIds
            }
        }

        return AuthorModel;

    });