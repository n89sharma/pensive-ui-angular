angular
  .module('content')
  .controller('ContentController', ContentController);
  
  function ContentController($http, $sanitize, PensiveCommonApi){
    var vm = this;

    vm.selectedFontSize = '17px';
    vm.fontSizeOptions = PensiveCommonApi.getFontSizeOptions();
    vm.fontFamilyOptions = PensiveCommonApi.getFontFamilies();
    vm.selectedFontFamily = 'Open Sans';

    vm.paragraphs = PensiveCommonApi.getData();
    vm.renderedParagraphs = null;

    function formatParagraphs(){
        vm.renderedParagraphs = vm.paragraphs.map(function(inputParagraph){
            return inputParagraph.paragraphContent.match(/.{1,70}\b/g).join('<br>');
        });
    }

    formatParagraphs(vm.paragraphs, vm.renderedParagraphs);
    return vm;
  }