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
        this.id = httpData.id,
        this.lastName = httpData.lastName,
        this.firstName = httpData.firstName,
        this.careerDetails = httpData.careerDetails,
        this.educationBackground = httpData.educationBackground,
        this.bookIds = httpData.bookIds
    }

    return AuthorData;
}