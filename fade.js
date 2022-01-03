$.fn.isFullyInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + ($(window).height()*.90);

  return elementTop >= viewportTop && elementBottom <= viewportBottom;
};

function calculateShadow() {
    console.log($(window).scrollTop());
    
    $('span.shadow').each(function() {
      // if ($(this).isFullyInViewport()) {
          // $(this).addClass("-display_s");
          var s = $(window).scrollTop();
          var o = $(this).offset().top;
          var w = $(window).height();
          var shadowtop = 1 + ((2 * s - 2 * o) / w);
          var mid_shadow_magnitude = -40;
          
          var bottom_shadow_magnitude = -80;
          
          var mid_shadow = mid_shadow_magnitude * shadowtop;
          var bottom_shadow = bottom_shadow_magnitude * shadowtop;
          console.log("sh" + shadowtop);
          $(this).css("text-shadow", "4px "+ mid_shadow + "px var(--mid_purp),  8px " + bottom_shadow + "px var(--bot_purp)")
          // text-shadow: 4px 2px #e3f5d5,  8px 4px #e3f5d5;
      // }
    });
}

function calculateStart() {
    console.log($(window).scrollTop());
    
    $('span.shadow').each(function() {
      // if ($(this).isFullyInViewport()) {
          // $(this).addClass("-display_s");
          var s = $(window).scrollTop();
          var o = $(this).offset().top;
          var w = $(window).height();
          var shadowtop = (1 + ((2 * s - 2 * (o - w)) / w));
          var mid_shadow_magnitude = -40;
          
          var bottom_shadow_magnitude = -80;
          
          var mid_shadow = mid_shadow_magnitude * shadowtop;
          var bottom_shadow = bottom_shadow_magnitude * shadowtop;
          console.log("sh" + shadowtop);
          $(this).css("text-shadow", "4px "+ mid_shadow + "px var(--mid_purp),  8px " + bottom_shadow + "px var(--bot_purp)")
          // text-shadow: 4px 2px #e3f5d5,  8px 4px #e3f5d5;
      // }
    });
}

$(window).on('resize scroll', function() {
    calculateShadow();
  // $('p').each(function() {
  //   if ($(this).isFullyInViewport()) {
  //       $(this).addClass("-display");
  //   }
  // });
});