$(document).ready( function() { 


    $('#difficulty').on('change', function () {
        
        switch(this.value) {

            case 'difficulty':
            $("#card-holder").empty()
                break;
            case 'easy':
            $("#card-holder").empty()    
                    
                    $("#card-holder").append('<div id="row1" class="row"></div>');
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        
                    $("#card-holder").append('<div id="row2" class="row"></div>');
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                
                break;
            case 'medium':
            $("#card-holder").empty()
                // for(var i = 0; i < 4; i++) {

                    $("#card-holder").append('<div id="row1" class="row"></div>');
                    //                                  ^ I need row + i
                    // I also need the #row+i to be on the cards
                    // In order to have the rows/cards lay out properly
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                    
                    $("#card-holder").append('<div id="row2" class="row"></div>');
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                
                    $("#card-holder").append('<div id="row3" class="row"></div>');
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                
                    $("#card-holder").append('<div id="row4" class="row"></div>');
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                
                // }
                break;
            case 'hard':
            $("#card-holder").empty()
                
                    $("#card-holder").append('<div id="row1" class="row"></div>');
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row1").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                
                    $("#card-holder").append('<div id="row2" class="row"></div>');
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row2").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        
                    $("#card-holder").append('<div id="row3" class="row"></div>');
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row3").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        
                    $("#card-holder").append('<div id="row4" class="row"></div>');
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row4").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")

                    $("#card-holder").append('<div id="row5" class="row"></div>');
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row5").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        
                    $("#card-holder").append('<div id="row6" class="row"></div>');
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                        $("#row6").append("<div id='card' class='card'><div id='front' class='front'><div id='back' class='back flip'></div></div>")
                break;
        }
        difficulty = this.value;
    }) 

    // Hard Difficulty Array
        var cardsHard = [];

            for(var i = 1; i <= 18; i++){
                cardsHard.push(i);
            }
            for(var i = 1; i <= 18; i++){
                cardsHard.push(i);
            }
    // END

    // Medium Difficulty Array
        var cardsMedium = [];

            for(var i = 1; i <= 8; i++){
                cardsMedium.push(i);
            }
            for(var i = 1; i <= 8; i++){
                cardsMedium.push(i);
            }
    // END

    // Easy Difficulty Array
        var cardsEasy = [];

            for(var i = 1; i <= 2; i++){
                cardsEasy.push(i);
            }
            for(var i = 1; i <= 2; i++){
                cardsEasy.push(i);
            }
    // END

    // (Array) Card value Shuffle
        Array.prototype.shuffle = function(cardsToShuffle) {
            input = this;
            
            for (var i = input.length-1; i >=0; i--) {
            
                var randomIndex = Math.floor(Math.random()*(i+1)); 
                var itemAtIndex = input[randomIndex]; 
                
                input[randomIndex] = input[i]; 
                input[i] = itemAtIndex;
            }
            return input;
        }
    // END Shuffle
    
        function setupCards() {    
            $(".back").each(function( i, div ) {
                console.log(cardsToShuffle[i]);
                $( div ).text(cardsToShuffle[i]);
            });  
        }

        function flipCards() {
            var limit;
            $(".card").on("click", function() {
                console.log("card click");
                limit++;
                if (limit <= 2) {
                    $(this).addClass("flip");
                } else {
                    nil
                }
            });
        }

        function unflipCards() {
            $(".card").remove("flip");
        }

        function wLCondition() {
    
        }
        

        $("#play").on("click", function() {
            parent = $("#card");

            switch(difficulty) {
                case "easy":
                    cardsToShuffle = cardsEasy.slice();
                    cardsToShuffle.shuffle();
                    break; 
                case "medium":
                    cardsToShuffle = cardsMedium.slice();
                    cardsToShuffle.shuffle();
                    
                    break;
                case "hard":
                    cardsToShuffle = cardsHard.slice();
                    cardsToShuffle.shuffle();
                    break; 
            }
            setupCards();
            flipCards();
            // $("#play").text("New Game");
        });



});
        // THINGS TO ADD:
        // A way to only allow 2 cards to be face up -       \
        // Compare the 2 values -                              Working On
        // If they match keep the cards face up -              To Make Work
        // If they DON'T match, return the cards face-down - /
        // Game reset after completion?

        // THINGS TO FIX:
        // Div creation.. how to loop with row/cards #'s matching per amount?
        // Needs to add the correct row/div number 

        // $(".card").flip({
        //     trigger: "click"
        // })

        // for(var i = 0; i < xTcount; i++) {
        //     doSomething();
        //     doSomethingElse();