angular
  .module('note')
  .controller('NoteController', function(AuthorData, $http, $sanitize){

    var controller = {
        noteData: "",
        noteHtmlData: "",
        renderMarkdown: renderMarkdown,
        isHtmlVisible: false,
        showRawData: showRawData,
        showHtmlData: showHtmlData,
        handlePaste: handlePaste,
        imageList: [],
        errors:[],
        valid: true
    };

    function validateImage(){
        var valid = true;
        if(controller.imageList.length>4){
            controller.errors.push('Sorry you can not have more than 5 images per note.');
            valid = false;
        }
        return valid;
    }

    function handlePaste (event){
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            if(validateImage()){
                controller.imageList.push(reader.result);
                console.log(controller.imageList);
            }
        }, false);

        var clipboardData = event.clipboardData;
        angular.forEach(clipboardData.items, function(item, key){
            console.log(clipboardData.items[key]['type']);
            if (clipboardData.items[key]['type'].match(/image.*/)) {
                reader.readAsDataURL(clipboardData.items[key].getAsFile());
            }
        });
        console.log('paste executed');


    };

    function renderMarkdown(){
        controller.noteHtmlData = marked(controller.noteData);
    }

    function showRawData(){
        controller.isHtmlVisible  = false;
    }

    function showHtmlData(){
        controller.noteHtmlData = marked(controller.noteData);
        console.log(controller.noteHtmlData);
        controller.isHtmlVisible  = true;
    }

    return controller;
  });