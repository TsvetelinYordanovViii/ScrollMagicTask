let geeseController = new ScrollMagic.Controller();

let headerPin = new ScrollMagic.Scene({
    triggerElement: '.buffer',
    triggerHook: 0.3
})
    .setPin('.geese-header', { pushFollowers: false })
    .addTo(geeseController);

let headerParallax = new ScrollMagic.Scene(
    {
        triggerElement: '.buffer2',
        triggerHook: .5,
        duration: '200%'
    })
    .setTween(TweenMax.from('.header-background', 1, { y: '-65%', ease: Power0.easeNone }))
    .addIndicators()
    .addTo(geeseController);