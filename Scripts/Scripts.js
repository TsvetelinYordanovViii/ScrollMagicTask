const geeseController = new ScrollMagic.Controller();

/*const headerPin = new ScrollMagic.Scene({
    triggerElement: '.geese-navigation',
    triggerHook: 0.3
})
    .setPin('.geese-navigation', { pushFollowers: false })
    .addTo(geeseController);*/

const headerParallax = new ScrollMagic.Scene(
    {
        triggerElement: '.geese-header',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(TweenMax.from('.header-background', 1, { y: '-25%', ease: Power0.easeNone }))
    .addIndicators()
    .addTo(geeseController);