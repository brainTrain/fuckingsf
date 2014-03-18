$(document).ready( function() {
    var picZ = 5;
    var numbah = 0;
    $('h1').click( function() {

        if(numbah > picZ) {
            numbah = 0;
        }

        //$('html').css('background', 'url(sf' + numbah + '.jpg) no-repeat center center fixed');
        $('.outer-container').css('background', 'url(sf' + numbah + '.jpg) no-repeat center center fixed');
        
        $('.pic-views').attr('src', 'https://logs.loggly.com/inputs/af61ac91-1e7d-45ea-8e81-c1b8ace8f4be.gif?load=pic' + numbah );

        numbah ++;
    
    });
    /*
    //hide and show nav dudez
    $('h1').click( function() {
        $('.nav-dude').css('left', '0px'); 
        $('.outer-container').css('left', '30px'); 
    });
    */
});
