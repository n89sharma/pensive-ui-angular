angular
  .module('author')
  .factory('AuthorData', AuthorDataFactory);

function AuthorDataFactory(){

    function AuthorData(httpData){
      this.mapFromHttp(httpData)
    }

    AuthorData.prototype.mapToData = function (data){
        return {
            id: data.id,
            lastName : data.lastName,
            firstName : data.firstName,
            careerDetails : data.careerDetails,
            educationBackground : data.educationBackground,
            bookIds: data.bookIds
        }
    }

    AuthorData.prototype.mapFromHttp = function (httpData){
        return {
            id: httpData.id,
            lastName : httpData.lastName,
            firstName : httpData.firstName,
            careerDetails : httpData.careerDetails,
            educationBackground : httpData.educationBackground,
            bookIds: httpData.bookIds
        }
    }

    return AuthorData;
}