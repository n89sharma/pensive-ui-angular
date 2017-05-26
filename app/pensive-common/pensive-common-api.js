angular
    .module('PensiveCommon')
    .factory('PensiveCommonApi', PensiveCommonApiFactory);

    function PensiveCommonApiFactory ($http){

        function PensiveCommonApi () {
        }

        PensiveCommonApi.prototype.getWikiExcerpt = function (keyword) {
            var wikiUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${keyword}`;
            return $http.get(wikiUrl)
              .then(function(response){
                  var pages = response.data.query.pages;
                  for( var key in pages){
                      var wikiExcerpt = pages[key].extract;
                      if(wikiExcerpt){
                          return wikiExcerpt;
                      }
                  }
              });
        };

        PensiveCommonApi.getFontFamilies = function () {
            return [
                'Roboto',
                'Open Sans',
                'Lato',
                'Source Sans Pro',
                'Raleway'
            ];
        }

        PensiveCommonApi.getFontSizeOptions = function () {
            return [
                '13px',
                '14px',
                '15px',
                '16px',
                '17px',
                '18px',
                '19px',
                '20px'
            ];
        }

        PensiveCommonApi.getData = function () {
            return [
                {
                    paragraphContent: 'In ancient times, in everyday speech and custom, the most mundane happenings were ' +
                                      'connected with the grandest cosmic events. A charming example is an incantation against ' +
                                      'the worm which the Assyrians of 1000 B.C. imagined to cause toothaches. It begins with'  +
                                      'the origin of the universe and ends with a cure for toothache:',
                    researchKeywords: ['Assyrians'],
                },
                {
                    paragraphContent:'Our ancestors were eager to understand the world but had not quite stumbled upon the method. ' +
                                     'They imagined a small, quaint, tidy universe in which the dominant forces were gods like Anu, Ea, and ' +
                                     'Shamash. In that universe humans played an important if not a central role. We were intimately bound up with ' +
                                     'the rest of nature. The treatment of toothache with second-rate beer was tied to the deepest cosmological ' +
                                     'mysteries. ',
                    researchKeywords: ['Anu', 'Ea', 'Shamash']
                }];
        }

        return PensiveCommonApi;
    }
