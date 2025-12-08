$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function(){
    var vw;
    
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
        $('#b77').animate({top:240, left: vw+250},500);
        $('#b88').animate({top:240, left: vw+350},500);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $('#subBannarText').fadeIn('slow'); // Fix from previous step
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    // Balloon animation loops
    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }

    function loopEight() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b8').animate({left:randleft,bottom:randtop},10000,function(){
            loopEight();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
         $('#cakeContainer').fadeIn('slow');
         $('#candleFire').removeClass('active');
         $(this).fadeOut('slow').delay(3000).promise().done(function(){
             $('#light_candle').fadeIn('slow');
    });
});

    $('#light_candle').click(function(){
        $('#candleFire').addClass('active').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
    });
});

    $('#wish_message').click(function(){
        vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
        $('#b8').attr('id','b88');
        
        $('#b11').animate({top:290, left: vw-350},500);
        $('#b22').animate({top:290, left: vw-250},500);
        $('#b33').animate({top:290, left: vw-150},500);
        $('#b44').animate({top:290, left: vw-50},500);
        $('#b55').animate({top:290, left: vw+50},500);
        $('#b66').animate({top:290, left: vw+150},500);
        $('#b77').animate({top:290, left: vw+250},500);
        $('#b88').animate({top:290, left: vw+350},500);
        
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        
        // Ensure the cake fades out before the message starts (Fix from previous step)
        $('#cakeContainer').fadeOut('fast').promise().done(function(){ 
            $('.message').fadeIn('slow');
        });
        
        var i = 0;

        function msgLoop(i) {
            // Fades out the current line after 800ms wait
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i = i + 1;
                
                if (i > 52) {
                    // FIX: Final exit condition. i is 52 here (last line displayed and faded out).
                    // Wait an additional 3 seconds for the user to read the very last line, 
                    // and then fade out the entire message container.
                    $('.message').delay(3000).fadeOut('slow').promise().done(function(){
                        $('#cakeContainer').fadeIn('fast'); // Show cake again
                    });
                } else {
                    // Determine the delay: 4000ms for the last message line (i=52), 1000ms for others.
                    var lineDelay = (i === 52) ? 4000 : 1000;
                    
                    // FIX: Chain the recursive call to the end of the fadeIn/delay sequence
                    // This ensures the next line only starts after the current line has finished its display delay.
                    $("p:nth-child("+i+")").fadeIn('slow').delay(lineDelay).promise().done(function(){
                        msgLoop(i);
                    });
                }
            });
        }
        
        msgLoop(0); 
    });
    
});