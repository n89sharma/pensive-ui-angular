function AuthorModelFactory(){

    function AuthorModel(data){
        return mapToModel(data);
    }

    function mapToModel(){
        return {
            lastName : data.lastName,
            firstName : data.firstName,
            careerDetails : data.careerDetails,
            educationBackground : data.educationBackground,
            bookIds: data.bookIds
        }
    }

    return AuthorModel;
}