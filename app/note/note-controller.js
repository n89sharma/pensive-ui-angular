angular
  .module('note')
  .controller('NoteController', NoteController);
  
  function NoteController(AuthorData, $http, $sanitize){

    var vm = this;
    
    vm.validateImage = function () {
        var valid = true;
        if(vm.imageList.length>4){
            vm.errors.push('Sorry you can not have more than 5 images per note.');
            valid = false;
        }
        return valid;
    }

    vm.handlePaste = function (event) {
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            if(validateImage()){
                vm.imageList.push(reader.result);
                console.log(vm.imageList);
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

    vm.renderMarkdown = function () {
        vm.noteHtmlData = marked(vm.noteData);
    }

    vm.showRawData = function () {
        vm.isHtmlVisible  = false;
    }

    vm.showHtmlData = function () {
        vm.noteHtmlData = marked(vm.noteData);
        console.log(vm.noteHtmlData);
        vm.isHtmlVisible  = true;
    }

    return vm;
  }