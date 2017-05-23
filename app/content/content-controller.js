angular
  .module('content')
  .controller('ContentController', function($http, $sanitize){
    var vm = this;

    var controller = {
        content:"something somethign dark side",
        selectedFontFamily: selectedFontFamily(),
        fontFamilyOptions: fontFamilyOptions(),
        selectedFontSize: selectedFontSize(),
        fontSizeOptions: fontSizeOptions(),
        paragraphs: getData(),
        renderedParagraphs: [],
        formatParagraphs: formatParagraphs,
        //researchKeywords: researchKeywords(),
        wikiExcerpts: []
    };

    function findWikiExcerpt(keyword){
        var wikiUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${keyword}`;
        $http.get(wikiUrl)
          .then(function(response){
              var pages = response.data.query.pages;
              for( var key in pages){
                  var wikiExcerpt = pages[key].extract;
                  if(wikiExcerpt){
                      controller.wikiExcerpts.push(formatParagraph(wikiExcerpt));
                  }
              }
          });
    }

    function getWikiExcerpts(){
        return [{
            keyword: 'Assyrians',
            excerpt: 'Assyrians were cool and what not.'
        },{
            keyword: 'Ea',
            excerpt: 'Ea was a god.'
        },{
            keyword: 'Shamash',
            excerpt: 'Shamash was a god.'
        },{
            keyword: 'Anu',
            excerpt: 'Anu was a god.'
        }];
    }

    function getData(){
        return [
                {
                    paragraphContent: 'In ancient times, in everyday speech and custom, the most mundane happenings were ' +
                                      'connected with the grandest cosmic events. A charming example is an incantation against ' +
                                      'the worm which the Assyrians of 1000 B.C. imagined to cause toothaches. It begins with'  +
                                      'the origin of the universe and ends with a cure for toothache:',
                    researchKeywords: ['Assyrians'],
                },

                {
                    paragraphContent:'After Anu had created the heaven, '+
                                     'And the heaven had created the earth, '+
                                     'And the earth had created the rivers, '+
                                     'And the rivers had created the canals, '+
                                     'And the canals had created the morass, '+
                                     'And the morass had created the worm, '+
                                     'The worm went before Shamash, weeping, '+
                                     'His tears flowing before Ea: '+
                                     '‘What wilt thou give me for my food, '+
                                     'What wilt thou give me for my drink?’ '+
                                     '‘I will give thee the dried fig '+
                                     'And the apricot.’ '+
                                     '‘What are these to me? The dried fig '+
                                     'And the apricot! '+
                                     'Lift me up, and among the teeth '+
                                     'And the gums let me dwell! . . '+
                                     'Because thou hast said this, O worm, '+
                                     'May Ea smite thee with the might of '+
                                     'His hand! '+
                                     '(Incantation against toothache.) '+
                                     'Its treatment: Second-grade beer . . . and oil thou shalt mix together; '+
                                     'The incantation thou shalt recite three times thereon and shalt put the medicine upon '+
                                     'the tooth. ',
                    researchKeywords: []
                },

                {
                    paragraphContent:'Our ancestors were eager to understand the world but had not quite stumbled upon the method. ' +
                                     'They imagined a small, quaint, tidy universe in which the dominant forces were gods like Anu, Ea, and ' +
                                     'Shamash. In that universe humans played an important if not a central role. We were intimately bound up with ' +
                                     'the rest of nature. The treatment of toothache with second-rate beer was tied to the deepest cosmological ' +
                                     'mysteries. ',
                    researchKeywords: ['Anu', 'Ea', 'Shamash']
                },

                {
                    paragraphContent:'Today we have discovered a powerful and elegant way to understand the universe, a ' +
                                     'method called science; it has revealed to us a universe so ancient and so vast that human ' +
                                     'affairs seem at first sight to be of little consequence. We have grown distant from the ' +
                                     'Cosmos. It has seemed remote and irrelevant to everyday concerns. But science has found ' +
                                     'not only that the universe has a reeling and ecstatic grandeur, not only that it is accessible ' +
                                     'to human understanding, but also that we are, in a very real and profound sense, a part of ' +
                                     'that Cosmos, born from it, our fate deeply connected with it. The most basic human events ' +
                                     'and the most trivial trace back to the universe and its origins. This book is devoted to the ' +
                                     'exploration of that cosmic perspective. ',
                    researchKeywords: []
                },

                {
                    paragraphContent:'In the summer and fall of 1976, as a member of the Viking Lander Imaging Flight ' +
                                     'Team, I was engaged, with a hundred of my scientific colleagues, in the exploration of the ' +
                                     'planet Mars. For the first time in human history we had landed two space vehicles on the ' +
                                     'surface of another world. The results, described more fully in Chapter 5, were spectacular, ' +
                                     'the historical significance of the mission utterly apparent. And yet the general public was ' +
                                     'learning almost nothing of these great happenings. The press was largely inattentive; ' +
                                     'television ignored the mission almost altogether. When it became clear that a definitive ' +
                                     'answer on whether there is life on Mars would not be forthcoming, interest dwindled still ' +
                                     'further. There was little tolerance for ambiguity. When we found the sky of Mars to be a ' +
                                     'kind of pinkish-yellow rather than the blue which had erroneously first been reported, the ' +
                                     'announcement was greeted by a chorus of good-natured boos from the assembled reporters ' +
                                     '- they wanted Mars to be, even in this respect, like the Earth. They believed that their ' +
                                     'audiences would be progressively disinterested as Mars was revealed to be less and less ' +
                                     'like the Earth. And yet the Martian landscapes are staggering, the vistas breathtaking. I was ' +
                                     'positive from my own experience that an enormous global interest exists in the exploration ' +
                                     'of the planets and in many kindred scientific topics - the origin of life, the Earth, and the ' +
                                     'Cosmos, the search for extraterrestrial intelligence, our connection with the universe. And I ' +
                                     'was certain that this interest could be excited through that most powerful communications ' +
                                     'medium, television. ',
                    researchKeywords: []
                },

                {
                    paragraphContent:'My feelings were shared by B. Gentry Lee, the Viking Data Analysis and Mission ' +
                                     'Planning Director, a man of extraordinary organizational abilities. We decided, gamely, to ' +
                                     'do something about the problem ourselves. Lee proposed that we form a production ' +
                                     'company devoted to the communication of science in an engaging and accessible way. In ' +
                                     'the following months we were approached on a number of projects. But by far the most ' +
                                     'interesting was an inquiry tendered by KCET, the Public Broadcasting Service’s outlet in ' +
                                     'Los Angeles. Eventually, we jointly agreed to produce a thirteen-part television series ' +
                                     'oriented toward astronomy but with a very broad human perspective. It was to be aimed at ' +
                                     'popular audiences, to be visually and musically stunning, and to engage the heart as well as ' +
                                     'the mind. We talked with underwriters, hired an executive producer, and found ourselves ' +
                                     'embarked on a three-year project called Cosmos. At this writing it has an estimated ' +
                                     'worldwide audience of 140 million people, or 3 percent of the human population of the ' +
                                     'planet Earth. It is dedicated to the proposition that the public is far more intelligent than it ' +
                                     'has generally been given credit for; that the deepest scientific questions on the nature and ' +
                                     'origin of the world excite the interests and passions of enormous numbers of people. The ' +
                                     'present epoch is a major crossroads for our civilization and perhaps for our species. ' +
                                     'Whatever road we take, our fate is indissolubly bound up with science. It is essential as a ' +
                                     'matter of simple survival for us to understand science. In addition, science is a delight; ' +
                                     'evolution has arranged that we take pleasure in understanding - those who understand are ' +
                                     'more likely to survive. The Cosmos television series and this book represent a hopeful ' +
                                     'experiment in communicating some of the ideas, methods and joys of science.',
                    researchKeywords: []
                }];
    }

    function formatParagraphs(inputArray, outputArray){
        inputArray.forEach(function(inputParagraph){
            outputArray.push(formatParagraph(inputParagraph));
        });
    }

    function formatParagraph(inputParagraph){
        return inputParagraph.paragraphContent.match(/.{1,70}\b/g).join('<br>');
    }

    function fontSizeOptions(){
        return [
        '13px',
        '14px',
        '15px',
        '16px',
        '17px',
        '18px',
        '19px',
        '20px'];
    }

    function selectedFontSize(){
        return '17px';
    }

    function selectedFontFamily () {
        return 'Libre Baskerville';
    }
    
    function fontFamilyOptions () {
        return [
            'Trebuchet MS',
            'Roboto',
            'Open Sans',
            'Lato',
            'Source Sans Pro',
            'Raleway',
            'Droid Sans',
            'Noto Sans',
            'Muli',
            'Poppins',
            'Oxygen',
            'Slabo 27px',
            'Robot Slab',
            'Merriweather',
            'Droid Serif',
            'Playfair Display',
            'PT Serif',
            'Bitter',
            'Arvo',
            'Noto Serif',
            'Crimson Text',
            'Bree Serif',
            'Libre Baskerville'
        ];
    }

    formatParagraphs(controller.paragraphs, controller.renderedParagraphs);
    return controller;
  });