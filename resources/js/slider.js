//function to just make the slider...
function makeSlider(){
     $('.slider').slick({
                    autoplay:true,
                    autoplaySpeed:5000,
                    dots:true,
                    mobileFirst:true,
                    pauseOnHover:false,
                    fade:false,
                    responsive:[
                        {
                            breakpoint: 1000,
                            settings: {
                                autoplay:true,
                                fade:false
                                
                            }
                        },
                        {
                            breakpoint:500,
                            settings:{
                                dots:false,
                                fade:false,
                                autoplay:true,
                                adaptiveHeight:false,
                                arrows:false
                            }
                        }
                     ]
                 });
}

// function to remove the slider
function removeSlider(){
    $('.slider').slick('unslick');
}

//function to check whether to put slider
function checkSlider(){
    
    if ($(window).width()>499)
        makeSlider();
    else
        removeSlider();
    
}

//initial loading time
$(document).ready(checkSlider);


/*on orientation change
$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(){
    alert("The orientation has changed!");
  });                     
});  */                   

//while resizing the page. not useful for orientation
/*$(window).resize(checkSlider);*/

//testing for orientation
var supportsOrientationChange = "onorientationchange" in screen,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

            window.addEventListener(orientationEvent,checkSlider, false);