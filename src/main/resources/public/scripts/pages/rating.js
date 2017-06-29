/* ----------------------------------------------------
 *  Rating
 *
 *  JavaScript file for the ui.rating.html.
 *
 *  Description: Contains codes from rateYo.js
 *  Offical Site: http://rateyo.fundoocode.ninja/
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 

var Rating = (function($) {

    'use strict';

    /* ------------------------- 
        Begin Rating
     ------------------------- */

    var initRating = function() {
        // Function to get random rating value between min and max as parameters
        function getRandomRating(min, max) {

            // set min & max
            min = min || 0;
            max = max || 5;

            // get random rating value
            var randomRating = parseFloat((Math.random() * max).toFixed(2));

            // check if randon rating is less that min
            randomRating = randomRating < min ? min : randomRating;

            // return randon rating value
            return randomRating;

        }

        // Default Rating Star
        $('#rating-default1').rateYo({
            rating: getRandomRating()
        });

        $('#rating-default2').rateYo({
            rating: getRandomRating()
        });

        $('#rating-default3').rateYo({
            rating: getRandomRating()
        });



        // Contextual Colors Rating Star
        $('#rating-color-default').rateYo({
            rating: getRandomRating()
        });

        $('#rating-color-primary').rateYo({
            rating: getRandomRating()
        });

        $('#rating-color-success').rateYo({
            rating: getRandomRating()
        });

        $('#rating-color-info').rateYo({
            rating: getRandomRating()
        });




        // Rating Star Sizing
        $('#rating-size-40').rateYo({
            starWidth: '40px',
            rating: getRandomRating()
        });

        $('#rating-size-30').rateYo({
            starWidth: '30px',
            rating: getRandomRating()
        });

        $('#rating-size-20').rateYo({
            starWidth: '20px',
            rating: getRandomRating()
        });




        // Rating Star Normal Fill
        $('#rating-normal-fill1').rateYo({
            normalFill: '#ddd'
        });

        $('#rating-normal-fill2').rateYo({
            normalFill: '#ababab'
        });




        // Rating Star Rated Fill
        $('#rating-rated-fill1').rateYo({
            ratedFill: '#27c24c',
            rating: getRandomRating()
        });

        $('#rating-rated-fill2').rateYo({
            ratedFill: '#00abe8',
            rating: getRandomRating()
        }); 



        // Rating Star Number of stars
        $('#rating-n-stars1').rateYo({
            ratedFill: '#27c24c',
            rating: getRandomRating(),
            numStars: 7
        });

        $('#rating-n-stars2').rateYo({
            ratedFill: '#00abe8',
            rating: getRandomRating(),
            numStars: 7
        }); 



        // Max Value
        $('#rating-max-value1').rateYo({
            ratedFill: '#27c24c',
            rating: getRandomRating(0, 1),
            numStars: 1,
            maxValue: 1
        }); 

        $('#rating-max-value2').rateYo({
            ratedFill: '#00abe8',
            rating: getRandomRating(0, 2),
            numStars: 2,
            maxValue: 2
        }); 

        var updateCounter = function (rating) {
            $(this).next('.counter').text(rating);
        };



        // Precision Rating
        $('#rating-precision1').rateYo({
            rating: getRandomRating(),
            precision: $(this).data('precision'),
            onSet: updateCounter,
            onChange: updateCounter
        })



        // Percentage Rating
        $('#percentage-rating').rateYo({
            rating: '50%',
            precision: $(this).data('precision'),
            onSet: function(rating) {
                $(this).next('.counter').text(rating + '%');
            },
            onChange: function(rating) {
                $(this).next('.counter').text(rating + '%');
            }
        });



        // Half Star Rating
        $('#halfstar-rating').rateYo({
            rating: 2.5,
            halfStar: true
        });



        // Full Star Rating
        $('#fullstar-rating').rateYo({
            rating: 3,
            fullStar: true
        })



        // Read Only Rating
        $('#rating-readonly').rateYo({
            rating: 3,
            readOnly: true
        })



        // Spaced Rating
        $('#rating-spacing').rateYo({
            rating: 3,
            spacing: '10px'
        });



        // Spaced Rating
        $('#rating-onSet').rateYo({
            onSet: function (rating, rateYoInstance) {
                alert('Rating is set to: ' + rating);
            }
        });



        // Spaced Rating
        $('#rating-onChange').rateYo({
            rating: 3,
            onChange: function (rating, rateYoInstance) {
                alert("Rating is changed to: " + rating);
            }
        });
    };

    /* ------------------------- 
        End Rating
     ------------------------- */


    // Return the function under Init
    return {
        Init: function() {
            initRating();
        }
    };

})(jQuery);


// Initiate the Rating
$(function() { Rating.Init(); });